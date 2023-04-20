const { v4 } = require('uuid');
const getAll = require('./getAll');
const updateBooks = require('./updateBooks');

const add = async (data) => {
  console.log('data', data);
  const books = await getAll();
  const newBook = { ...data, id: v4() };
  books.push(newBook);
  await updateBooks(books);
  return newBook;
};

module.exports = add;
