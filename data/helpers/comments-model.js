const db = require("../dbConfig.js");

module.exports = {
  find,
  findById,
  create,
  remove,
  update
};

async function find(id) {
  const comments = await db("comments").where({ post_id: id });
  return comments;
}

async function findById(id) {
  const comment = await db("comments")
    .where({ id })
    .first();
  return comment;
}

async function create(item) {
  const [id] = await db("comments").insert(item);
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
