const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1234',
  port: 5432,
});

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
  } catch (err) {
    console.error('Connection error:', err.stack);
    process.exit(1);
  }
}

function getClient() {
  return client;
}

module.exports = { connectDB, getClient };
