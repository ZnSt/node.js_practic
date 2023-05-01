const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const productsRouter = require('./routes/api/products');

const app = express();
app.use(express.json());

app.use('/api/products', productsRouter);

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch((error) => {
    console.log('error.message: ', error.message);
    process.exit(1);
  });
