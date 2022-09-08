const pg = require('pg') //require importa um módulo

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'admin',
    port: 5432,
})

module.exports = client