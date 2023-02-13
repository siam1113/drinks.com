const mysql = require("mysql2");

// database set-up
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sherlockholmes",
  database: "drinks",
});

module.exports = connection;
