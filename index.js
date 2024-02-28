// index.js
const express = require('express');
const app = express();
const PORT = 3000;

const routes = require('./src/routes/routes');

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
