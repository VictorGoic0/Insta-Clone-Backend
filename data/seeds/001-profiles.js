const bcrypt = require("bcryptjs");
const users = require("../profiles.js");

exports.seed = function(knex, Promise) {
  const hashedUsers = users.map(user => {
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
    return user;
  });

  return knex("profiles").insert(hashedUsers);
};
