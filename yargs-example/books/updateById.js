const getAll = require('./getAll');
const updateBooks = require('./updateBooks');

const updateById = async (id, data) => {
  const books = await getAll();
  console.log('books', books);
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    null;
  }
  books[index] = { ...data, id };
  await updateBooks(books);
  return books[index];
};

module.exports = updateById;
