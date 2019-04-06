const db = require("../dbConfig.js");

module.exports = {
  find,
  findById,
  create,
  remove,
  update
};

async function find() {
  const posts = await db("posts")
    .select({
      id: "posts.id",
      user_id: "posts.user_id",
      imageUrl: "posts.imageUrl",
      likes: "posts.likes",
      username: "profiles.username",
      thumbnailUrl: "profiles.thumbnailUrl"
    })
    .innerJoin("profiles", "posts.user_id", "profiles.id");
  for (post of posts) {
    post.comments = await db("comments")
      .select({
        id: "comments.id",
        username: "profiles.username",
        text: "comments.text",
        thumbnailUrl: "profiles.thumbnailUrl"
      })
      .innerJoin("profiles", "comments.user_id", "profiles.id")
      .where({
        "comments.post_id": post.id
      })
      .limit(3);
  }
  return posts;
}

async function findById(id) {
  const post = await db("posts")
    .select({
      id: "posts.id",
      user_id: "posts.user_id",
      imageUrl: "posts.imageUrl",
      likes: "posts.likes",
      username: "profiles.username",
      thumbnailUrl: "profiles.thumbnailUrl",
      description: "posts.description"
    })
    .innerJoin("profiles", "posts.user_id", "profiles.id")
    .where({ "posts.id": id })
    .first();
  post.comments = await db("comments")
    .select({
      id: "comments.id",
      username: "profiles.username",
      text: "comments.text",
      thumbnailUrl: "profiles.thumbnailUrl"
    })
    .innerJoin("profiles", "comments.user_id", "profiles.id")
    .where({
      "comments.post_id": id
    });
  return post;
}

async function create(item) {
  const [id] = await db("posts")
    .insert(item)
    .returning("id");
  if (id) {
    const post = await findById(id);
    if (post) {
      return post;
    }
  }
}

async function remove(id) {
  const post = await findById(id);
  if (post) {
    const deleted = await db("posts")
      .where({ id })
      .del();
    if (deleted) {
      return post;
    }
  }
}

async function update(item, id) {
  const editedPost = await db("posts")
    .where({ id })
    .update(item);
  if (editedPost) {
    const post = await findById(id);
    return post;
  }
}
