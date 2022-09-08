const pg = require('pg') //require importa um módulo

const client = new pg.Client({
    user: 'postgresql',
    host: 'localhost',
    database: 'postgresql',
    password: 'postgresql',
    port: 5432,
})

module.exports = client