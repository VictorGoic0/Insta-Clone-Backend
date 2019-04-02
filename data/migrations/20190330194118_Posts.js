exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("profiles", table => {
      table.increments();
      table
        .string("username", 128)
        .notNullable()
        .unique();
      table.string("password", 20).notNullable();
      table
        .string("thumbnailUrl", 256)
        .defaultTo("https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg");
    })
    .createTable("posts", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("profiles.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("imageUrl", 256);
      table.string("description", 500);
      table.integer("likes");
    })
    .createTable("comments", table => {
      table.increments();
      table.string("text", 500).notNullable();
      table
        .integer("post_id")
        .unsigned()
        .references("posts.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .references("profiles.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("comments")
    .dropTableIfExists("posts")
    .dropTableIfExists("profiles");
};
