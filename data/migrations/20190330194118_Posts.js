exports.up = function (knex) {
  return knex.transaction(function (trx) {
    return knex.schema
      .transacting(trx)
      .createTable("profiles", (table) => {
        table.increments();
        table.string("username", 128).notNullable().unique();
        table.string("password", 100).notNullable();
        table.timestamps(true, true);
        table
          .string("thumbnailUrl", 256)
          .defaultTo(
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
          );
      })
      .createTable("posts", (table) => {
        table.increments();
        table
          .integer("user_id")
          .unsigned()
          .references("profiles.id")
          .notNullable()
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table.timestamps(true, true);
        table.string("imageUrl", 256);
        table.string("description", 500);
      })
      .createTable("comments", (table) => {
        table.increments();
        table.string("text", 500).notNullable();
        table.timestamps(true, true);
        table
          .integer("post_id")
          .unsigned()
          .references("posts.id")
          .notNullable()
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table
          .integer("user_id")
          .unsigned()
          .references("profiles.id")
          .notNullable()
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
      .createTable("likes", (table) => {
        table.increments();
        table.timestamps(true, true);
        table
          .integer("post_id")
          .unsigned()
          .references("posts.id")
          .notNullable()
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        table
          .integer("user_id")
          .unsigned()
          .references("profiles.id")
          .notNullable()
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
  });
};

exports.down = function (knex) {
  return knex.transaction(function (trx) {
    return knex.schema
      .transacting(trx)
      .dropTableIfExists("likes")
      .dropTableIfExists("comments")
      .dropTableIfExists("posts")
      .dropTableIfExists("profiles");
  });
};
