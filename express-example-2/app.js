const express = require('express');
const books = require('./books');
const app = express();

app.get('/books', (request, response) => {
  response.json(books);
  //   response.json({
  //     status: 'success',
  //     code: 200,
  //     data: {
  //       result: books,
  //     },
  //   }); - Also, i need to use response object
  //   response.send(books) - basically, I have to use response.json - it's correctly
});

app.listen(8000);
