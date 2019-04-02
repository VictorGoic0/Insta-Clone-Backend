const localPgConnection = {
  host: "localhost",
  database: "instagram",
  user: "victor",
  password: "pass"
};

const dbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/instagram.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); // enforce FK
      }
    }
  },
  production: {
    client: "pg",
    connection: dbConnection + "?ssl=true", //can be an object or a string
    pool: {
      //default, may be given different values by db admin
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "Posts", // default, created even if it's not listed in original migrations
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
