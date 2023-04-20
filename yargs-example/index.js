const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const booksOperation = require('./books');

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case 'getAll':
      const books = await booksOperation.getAll();
      console.log(books);
      break;

    case 'getById':
      const book = await booksOperation.getById(id);
      if (!book) {
        throw new Error(`Book with id ${id} not found`);
      }
      console.log(book);
      break;

    case 'add':
      const newData = await booksOperation.add(data);
      console.log(newData);
      break;

    case 'updateById':
      const updateBook = await booksOperation.updateById(id, data);
      if (!updateBook) {
        throw new Error(`Product with id ${id} not found`);
      }
      console.log(updateBook);
      break;

    case 'removeById':
      const removeBook = await booksOperation.removeById(id);
      console.log(removeBook);
      break;

    default:
      console.log('Unknow action');
  }
};

const arr = hideBin(process.argv);

const { argv } = yargs(arr);

invokeAction(argv);
