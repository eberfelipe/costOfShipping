// controller.js
const dataOfProducts = require('../data/dataOfProducts');
const utilsPlayground = require('utils-playground');

const listarProdutos = async (req, res) => {
    res.json(dataOfProducts);
};

const detalharProduto = async (req, res) => {
    const idProduto = parseInt(req.params.idProduto);
    const produto = dataOfProducts.find(p => p.id === idProduto);
    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    res.json(produto);
};

const calcularFrete = async (req, res) => {
    const idProduto = parseInt(req.params.idProduto);
    const cep = req.params.cep;
    const produto = dataOfProducts.find(p => p.id === idProduto);

    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    const estado = await utilsPlayground.getStateFromZipcode(cep);

    let percentualFrete = 0.12; // Valor padrão
    if (['BA', 'SE', 'AL', 'PE', 'PB'].includes(estado)) percentualFrete = 0.10;
    if (['SP', 'RJ'].includes(estado)) percentualFrete = 0.15;

    const frete = produto.valor * percentualFrete;

    res.json({
        produto,
        estado,
        frete
    });
};

module.exports = { listarProdutos, detalharProduto, calcularFrete };
