const db = require("../dbConfig.js");

module.exports = {
  findById,
  create,
  remove
};

async function findById(post_id, user_id) {
  const like = await db("likes")
    .where({ post_id, user_id })
    .first();
  return like;
}

async function create(item) {
  const [like] = await db("likes")
    .insert(item)
    .returning("*");
  if (like) {
    return like;
  }
}

async function remove(post_id, user_id) {
  const [deleted] = await db("likes")
    .where({ post_id, user_id })
    .del()
    .returning("*");
  if (deleted) {
    return deleted;
  }
}
