require('dotenv').config();

const HOST=process.env.DB_HOST;
const USER=process.env.DB_USER;
const PASSWORD=process.env.DB_PASSWORD;
const DATABASE=process.env.DB_DATABASE;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "mysql2",
        connection: {
            host: HOST,
            database: DATABASE,
            user: USER,
            password: PASSWORD,
            timezone: "UTC",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    // production: {
    // 	client: 'postgresql',
    // 	connection: {
    // 		database: 'my_db',
    // 		user:     'username',
    // 		password: 'password'
    // 	},
    // 	pool: {
    // 		min: 2,
    // 		max: 10
    // 	},
    // 	migrations: {
    // 		tableName: 'knex_migrations'
    // 	}
    // }
};
