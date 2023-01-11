const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    hosts: 'localhost',
    database: 'students',
    password: process.env.PG_PSWD,
    port: 5432,
})

module.exports = pool;