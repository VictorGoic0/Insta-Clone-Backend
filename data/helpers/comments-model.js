const db = require("../dbConfig.js");

module.exports = {
  find,
  findById,
  create,
  remove,
  update
};

async function find(id) {
  const comments = await db("comments")
    .select({
      id: "comments.id",
      text: "comments.text",
      username: "profiles.username",
      thumbnailUrl: "profiles.thumbnailUrl",
      createdAt: "comments.created_at",
      updatedAt: "comments.updated_at"
    })
    .innerJoin("profiles", "comments.user_id", "profiles.id")
    .orderBy("id", "asc")
    .where({ post_id: id });
  return comments;
}

async function findById(id) {
  const comment = await db("comments")
    .select({
      id: "comments.id",
      text: "comments.text",
      username: "profiles.username",
      thumbnailUrl: "profiles.thumbnailUrl",
      createdAt: "comments.created_at",
      updatedAt: "comments.updated_at"
    })
    .innerJoin("profiles", "comments.user_id", "profiles.id")
    .where({ "comments.id": id })
    .first();
  return comment;
}

async function create(item) {
  const [id] = await db("comments")
    .insert(item)
    .returning("id");
  if (id) {
    const comment = await findById(id);
    return comment;
  }
}

async function remove(id) {
  const comment = await findById(id);
  if (comment) {
    const deleted = await db("comments")
      .where({ id })
      .del();
    if (deleted) {
      return comment;
    }
  }
}

async function update(item, id) {
  const editedComment = await db("comments")
    .where({ id })
    .update(item);
  if (editedComment) {
    const comment = await findById(id);
    return comment;
  }
}
