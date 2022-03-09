const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

const Book = require('./src/controllers/controller');

app.use(bodyParser.json());

app.get('/books', Book.getBooks);

app.get('/book/:id', Book.getBooksById);

app.post('/book', Book.createBook);

app.delete('/book/:id', Book.deleteBook);

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${ PORT }`);
});
