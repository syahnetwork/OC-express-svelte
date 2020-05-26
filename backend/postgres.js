const { Pool } = require('pg')
const pool = new Pool({
  user: 'clinica',
  password: 'clinica',
  database: 'openclinica',
  host: 'localhost',
  port: '5432'
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}