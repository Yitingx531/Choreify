const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ChoreifyData',
    password: '0531',
    port: 5432,
  });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query hello', text);
    return pool.query(text, params, callback);
  }
};