const db = require("../dbConfig.js");

module.exports = {
  findById,
  create,
  remove
};

async function findById(id) {
  const like = await db("likes")
    .where({ id })
    .first();
  return like;
}

async function create(item) {
  const [id] = await db("likes")
    .insert({ post_id: item.post_id, user_id: item.user_id })
    .returning("id");
  if (id) {
    const like = await findById(id);
    return like;
  }
}

async function remove(id) {
  const like = await findById(id);
  if (like) {
    const deleted = await db("likes")
      .where({ id })
      .del();
    if (deleted) {
      return like;
    }
  }
}
