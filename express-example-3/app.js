const express = require('express');
const fs = require('fs/promises');
const moment = require('moment');
const cors = require('cors');
const books = require('./books');

const app = express();

app.use(cors());

// app.use(async (request, response, next) => {
//   const { method, url } = request;
//   const date = moment().format('DD-MM-YYYY_hh:mm:ss');
//   await fs.appendFile('server.log', `\n${method} ${url} ${date} hello world`);
//   next();
// });

// app.use((request, response, next) => {
//   console.log('First middleware');
//   next();
// });

// app.use((request, response, next) => {
//   console.log('Second middleware');
//   next();
// });

app.get('/books', (request, response) => {
  response.json(books);
});

app.listen(8000);

// If I use middleware, i need to remember that firstly request will be processed over middleware alternately
