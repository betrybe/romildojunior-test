const express = require('express');

const app = express();
const userRoutes = require('./routes/User');

app.use(express.json());

app.use(userRoutes);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
