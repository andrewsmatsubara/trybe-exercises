const bodyParser = require('body-parser');
const express = require('express');
const leArquivo = require('./simpsons');

const app = express();

app.use(bodyParser.json())

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ "message": `Hello, ${name}!` });

  return res.status(401).json({ "message": "Unauthorized" });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});

app.get('/simpsons', async (_req, res) => {
  const conteudo = await leArquivo();

  res.status(200).json(conteudo);
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const conteudo = await leArquivo();
  const resultado = await conteudo.find(simpson => simpson.id === id);

  if (!resultado) return res.status(404).json({ message: 'simpson not found' })

  res.status(200).json(resultado);
});

app.listen(3001);