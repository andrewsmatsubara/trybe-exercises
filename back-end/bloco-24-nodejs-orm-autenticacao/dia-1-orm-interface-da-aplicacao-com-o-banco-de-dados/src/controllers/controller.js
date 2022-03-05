const { Books } = require('../models');

const getBooks = async (_req, res) => {
  const books = await Books.findAll();

  console.log(books);

  return res.status(200).json(books);
};

module.exports = { getBooks };
