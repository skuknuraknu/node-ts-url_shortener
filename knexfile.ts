import 'dotenv/config'
import type { Knex } from "knex";
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection:{
      host:"localhost",
      port:5432,
      user:"postgres",
      password:"",
      database:"url_shortener"
    },
  },

  staging: {
   client: "postgresql",
    connection:{
      host:"localhost",
      port:5432,
      user:"postgres",
      password:"",
      database:"url_shortener",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection:{
      host:"localhost",
      port:5432,
      user:"postgres",
      password:"",
      database:"url_shortener"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
