const localPgConnection = {
  host: "localhost",
  database: "instagram",
  user: "victor",
  password: "pass",
};

const dbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/instagram.sqlite3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); // enforce FK
      },
    },
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    },
    pool: {
      min: 0, // Set min to 0 to allow connections to close
      max: 10, // Keep max conservative for Hobby-tier databases
      acquireTimeoutMillis: 60000, // Increase timeout to 60 seconds
      propagateCreateError: false, // Prevent throwing errors on initial connection failure
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
