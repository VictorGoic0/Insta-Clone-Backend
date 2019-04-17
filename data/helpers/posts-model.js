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
      createdAt: "posts.created_at",
      updatedAt: "posts.updated_at",
      username: "profiles.username",
      thumbnailUrl: "profiles.thumbnailUrl"
    })
    .innerJoin("profiles", "posts.user_id", "profiles.id");
  for (post of posts) {
    const comments = await db("comments")
      .select({
        id: "comments.id",
        username: "profiles.username",
        text: "comments.text",
        thumbnailUrl: "profiles.thumbnailUrl",
        createdAt: "comments.created_at",
        updatedAt: "comments.updated_at"
      })
      .innerJoin("profiles", "comments.user_id", "profiles.id")
      .orderBy("id", "asc")
      .where({
        "comments.post_id": post.id
      });
    if (comments.length <= 4) {
      post.comments = comments;
      post.showMore = false;
    } else {
      post.comments = comments.slice(0, 4);
      post.showMore = true;
    }
  }
  return posts;
}

async function findById(id) {
  const postContent = db("posts")
    .select({
      id: "posts.id",
      user_id: "posts.user_id",
      imageUrl: "posts.imageUrl",
      likes: "posts.likes",
      username: "profiles.username",
      thumbnailUrl: "profiles.thumbnailUrl",
      description: "posts.description",
      createdAt: "posts.created_at",
      updatedAt: "posts.updated_at"
    })
    .innerJoin("profiles", "posts.user_id", "profiles.id")
    .where({ "posts.id": id })
    .first();
  const postComments = db("comments")
    .select({
      id: "comments.id",
      username: "profiles.username",
      text: "comments.text",
      thumbnailUrl: "profiles.thumbnailUrl",
      createdAt: "comments.created_at",
      updatedAt: "comments.updated_at"
    })
    .innerJoin("profiles", "comments.user_id", "profiles.id")
    .orderBy("id", "asc")
    .where({
      "comments.post_id": id
    });
  const retrieval = await Promise.all([postContent, postComments]);
  if (retrieval[0]) {
    const post = retrieval[0];
    const comments = retrieval[1];
    return { ...post, comments };
  }
}

async function create(item) {
  const [id] = await db("posts")
    .insert(item)
    .returning("id");
  if (id) {
    const post = await findById(id);
    return post;
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
