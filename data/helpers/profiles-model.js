const db = require("../dbConfig.js");

module.exports = {
  find,
  findById,
  create,
  remove,
  update
};

async function find() {
  const profiles = await db("profiles");
  return profiles;
}

async function findById(id) {
  const profile = await db("profiles")
    .where({ "profiles.id": id })
    .first();
  return profile;
}

async function create(item) {
  const [id] = await db("profiles").insert(item);
  if (id) {
    const profile = await findById(id);
    if (profile) {
      return profile;
    }
  }
}

async function remove(id) {
  const profile = await findById(id);
  if (profile) {
    const deleted = await db("profiles")
      .where({ id })
      .del();
    if (deleted) {
      return profile;
    }
  }
}

async function update(item, id) {
  const editedProfile = await db("profiles")
    .where({ id })
    .update(item);
  if (editedProfile) {
    const profile = await findById(id);
    return profile;
  }
}
