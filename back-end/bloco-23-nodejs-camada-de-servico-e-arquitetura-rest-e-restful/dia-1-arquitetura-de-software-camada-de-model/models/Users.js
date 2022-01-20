const connection = require('./connection');

const create = ({ firstName, lastName, email, password }) => {
  return connection.execute(
    'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?);', [firstName, lastName, email, password]
  ).then(([result]) => ({ id: result.insertId, firstName, lastName, email}))
}

module.exports = create;