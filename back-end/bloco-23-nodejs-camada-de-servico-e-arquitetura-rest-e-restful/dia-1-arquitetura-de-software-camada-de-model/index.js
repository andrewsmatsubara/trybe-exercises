const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const create = require('./models/Users');

app.use(bodyParser.json());

app.post('/user', create);

app.listen(3000, () => {
  console.log('Atualmente trabalhando na porta 3000');
});
