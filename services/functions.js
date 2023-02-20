const getListProducts = require('./product/getListProducts.js')
const getProductDetails = require('./product/getProductDetails')
const insertProduct = require('./product/insertProduct')
const updateProduct = require('./product/updateProduct')
const transactionHistory = require('./product/transactionHistory')


module.exports = {
    getListProducts,
    getProductDetails,
    insertProduct,
    updateProduct,
    transactionHistory
}