const express = require('express');
const { v4 } = require('uuid');
const router = express.Router();
const books = require('../../data/books');

router.get('/', (request, response) => {
  response.json({
    status: 'success',
    code: 200,
    data: {
      result: books,
    },
  });
});

router.get('/:id', (request, response) => {
  const { id } = request.params;
  const result = books.find((book) => book.id === id);
  if (!result) {
    response.status(404).json({
      status: 'error',
      code: 404,
      message: `Product with id ${id} not found`,
    });
  }
  response.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
});

router.post('/', (request, response) => {
  console.log('request.body: ', request.body);
  const newBook = { ...request.body, id: v4() };
  books.push(newBook);
  response.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: newBook,
    },
  });
});

module.exports = router;
