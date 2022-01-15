const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const userRouter = require('./userRouter');
const { tokenValidation } = require('./validation')
const axios = require('axios');

app.use(cors());
app.use(bodyparser.json());
app.use('/user', userRouter);
app.listen(3001);

app.get('/btc', tokenValidation, async (_req, res) => {
  const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');

  return res.status(200).json(result.data);
});
