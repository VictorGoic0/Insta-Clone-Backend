const db = require("../dbConfig.js");

module.exports = {
  find,
  findById,
  create,
  remove,
  update,
};

async function find() {
  const posts = await db("posts")
    .select({
      id: "posts.id",
      user_id: "posts.user_id",
      imageUrl: "posts.imageUrl",
      createdAt: "posts.created_at",
      updatedAt: "posts.updated_at",
      username: "profiles.username",
      thumbnailUrl: "profiles.thumbnailUrl",
    })
    .innerJoin("profiles", "posts.user_id", "profiles.id")
    .leftJoin("likes", "posts.id", "likes.post_id")
    .groupBy(
      "posts.id",
      "posts.user_id",
      "posts.imageUrl",
      "posts.created_at",
      "posts.updated_at",
      "profiles.username",
      "profiles.thumbnailUrl"
    )
    .count("likes.id as likes")
    .orderBy("posts.id", "asc");

  // Get all comments for all posts in a single query
  const allComments = await db("comments")
    .select({
      id: "comments.id",
      post_id: "comments.post_id",
      username: "profiles.username",
      text: "comments.text",
      thumbnailUrl: "profiles.thumbnailUrl",
      createdAt: "comments.created_at",
      updatedAt: "comments.updated_at",
    })
    .innerJoin("profiles", "comments.user_id", "profiles.id")
    .orderBy("id", "asc")
    .whereIn(
      "comments.post_id",
      posts.map((p) => p.id)
    );

  // Group comments by post_id
  const commentsByPost = {};
  allComments.forEach((comment) => {
    if (!commentsByPost[comment.post_id]) {
      commentsByPost[comment.post_id] = [];
    }
    commentsByPost[comment.post_id].push(comment);
  });

  // Attach comments to posts
  posts.forEach((post) => {
    const comments = commentsByPost[post.id] || [];
    if (comments.length <= 4) {
      post.comments = comments;
      post.showMore = false;
    } else {
      post.comments = comments.slice(0, 4);
      post.showMore = true;
    }
  });

  return posts;
}

async function findById(id) {
  const postContent = db("posts")
    .select({
      id: "posts.id",
      user_id: "posts.user_id",
      imageUrl: "posts.imageUrl",
      username: "profiles.username",
      thumbnailUrl: "profiles.thumbnailUrl",
      description: "posts.description",
      createdAt: "posts.created_at",
      updatedAt: "posts.updated_at",
    })
    .innerJoin("profiles", "posts.user_id", "profiles.id")
    .where({ "posts.id": id })
    .first()
    .leftJoin("likes", "posts.id", "likes.post_id")
    .groupBy(
      "posts.id",
      "posts.user_id",
      "posts.imageUrl",
      "posts.created_at",
      "posts.updated_at",
      "profiles.username",
      "profiles.thumbnailUrl"
    )
    .count("likes.id as likes");
  const postComments = db("comments")
    .select({
      id: "comments.id",
      username: "profiles.username",
      text: "comments.text",
      thumbnailUrl: "profiles.thumbnailUrl",
      createdAt: "comments.created_at",
      updatedAt: "comments.updated_at",
    })
    .innerJoin("profiles", "comments.user_id", "profiles.id")
    .orderBy("id", "asc")
    .where({
      "comments.post_id": id,
    });
  const retrieval = await Promise.all([postContent, postComments]);
  if (retrieval[0]) {
    const post = retrieval[0];
    const comments = retrieval[1];
    return { ...post, comments };
  }
}

async function create(item) {
  const [id] = await db("posts").insert(item).returning("id");
  if (id) {
    const post = await findById(id);
    return post;
  }
}

async function remove(id) {
  const post = await findById(id);
  if (post) {
    const deleted = await db("posts").where({ id }).del();
    if (deleted) {
      return post;
    }
  }
}

async function update(item, id) {
  const editedPost = await db("posts").where({ id }).update(item);
  if (editedPost) {
    const post = await findById(id);
    return post;
  }
}
