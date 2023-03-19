const { Pool, Client } = require('pg');

const credentials = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const pool = new Pool(credentials);
const client = new Client(credentials);

module.exports = {
  credentials,
  pool,
  client,
};
