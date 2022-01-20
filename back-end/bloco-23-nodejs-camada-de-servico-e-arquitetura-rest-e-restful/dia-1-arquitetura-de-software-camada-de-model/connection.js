const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'andrewsmatsubara',
  password: 'S@p0l3g4l',
  database: 'users',
});

module.exports = connection;
