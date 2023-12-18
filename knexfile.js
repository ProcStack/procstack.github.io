// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/voids.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      database: 'ogcUsers',
      user:     'offGridChat',
      password: 'voidBasement1!2@3#'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'ogcUsersKnex'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      database: 'ogcUsers',
      user:     'offGridChat',
      password: 'voidBasement1!2@3#'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'ogcUsersKnex'
    }
  }

};
