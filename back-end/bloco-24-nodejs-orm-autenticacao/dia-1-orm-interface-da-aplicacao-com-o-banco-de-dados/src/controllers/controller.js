const { Books } = require('../models');

const getBooks = async (_req, res) => {
  const books = await Books.findAll();

  console.log(books);

  return res.status(200).json(books);
};

const getBooksById = async (req, res) => {
  const { id } = req.params;
  const book = await Books.findByPk(id);

  if (!book) {
    return res.status(404).json({ message: 'Livro não encontrado!' });
  }
  return res.status(200).json(book);
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Books.create({ title, author, pageQuantity });
  
    return res.status(201).json(book);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getBooks,
  getBooksById,
  createBook,
};
