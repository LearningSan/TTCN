const mysql = require("mysql2/promise");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  port: Number(process.env.DB_PORT), // 19325

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

  connectTimeout: 20000,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,

  ssl: { rejectUnauthorized: false },
});

module.exports = db;
