const express = require('express');

const app = express();
const userRoutes = require('./routes/User');
const recipeRoutes = require('./routes/Recipe');
const authRoutes = require('./routes/Auth');
app.use(userRoutes);
app.use(recipeRoutes);
app.use(authRoutes);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
