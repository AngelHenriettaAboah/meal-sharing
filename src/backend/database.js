const mysql = require("mysql2");
const database = require("./database");

// Create connection pool
const pool = mysql.createPool({
  host: "127.0.0.1 ",
  user: "amy",
  password: "2424",
  database: "meal_sharing_website",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export the pool
module.exports = pool.promise(); // Using promise-based API for MySQL2
