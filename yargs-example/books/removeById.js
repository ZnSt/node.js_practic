const getAll = require('./getAll');
const updateBooks = require('./updateBooks');

const removeById = async (id) => {
  const books = await getAll();
  const idx = books.findIndex((book) => book.id === id);
  if (idx === -1) {
    return null;
  }
  //   const [removeProducts] = products.splice(idx, 1);
  //   await updateProducts(products);
  //   return removeProducts

  const newBooks = books.filter((_, index) => index !== idx);
  await updateBooks(newBooks);
  return books[idx];
};

module.exports = removeById;
