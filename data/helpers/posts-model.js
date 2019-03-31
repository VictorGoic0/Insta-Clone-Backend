const db = require("../dbConfig.js");

module.exports = {
  find,
  findById,
  create,
  remove,
  update
};

async function find() {
  const posts = await db("posts");
  return posts;
}

async function findById(id) {
  const post = await db("posts")
    .where({ id })
    .first();
  return post;
}

async function create(item) {
  const [id] = await db("posts").insert(item);
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
  const editedpost = await db("posts")
    .where({ id })
    .update(item);
  if (editedpost) {
    const post = await findById(id);
    return post;
  }
}
