const express = require('express');
const app = express();

app.get('/contacts', (request, response) => {
  //   console.log(request.url);
  //   console.log(request.method);
  //   console.log(request.headers);
  response.send('<h2>Contacts Page</h2>');
});

app.get('/', (request, response) => {
  response.send('<h2>Home Page</h2>');
});

app.listen(8000, () => console.log('hello world'));
