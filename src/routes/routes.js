// routes.js
const express = require('express');
const controller = require('../controller/controller');
const router = express.Router();

router.get('/produtos', controller.listarProdutos);
router.get('/produtos/:idProduto', controller.detalharProduto);
router.get('/produtos/:idProduto/frete/:cep', controller.calcularFrete);

module.exports = router;
