const getAll = require('./getAll');
const getById = async (id) => {
  const books = await getAll();
  const result = books.find((book) => book.id === id);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getById;
