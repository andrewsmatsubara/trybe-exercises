const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const userRouter = require('./userRouter');

app.use(cors());
app.use(bodyparser.json());
app.use('/user', userRouter);
app.listen(3001);