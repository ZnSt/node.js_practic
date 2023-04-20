const fs = require('fs/promises');
const filePath = require('./filePath');

const getAll = async () => {
  const data = await fs.readFile(filePath);
  const books = JSON.parse(data);
  return books;
};

module.exports = getAll;
