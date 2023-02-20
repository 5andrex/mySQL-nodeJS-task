const getListProducts = require('./product/getListProducts.js')
const getProductDetails = require('./product/getProductDetails')
const insertProduct = require('./product/insertProduct')
const updateProduct = require('./product/updateProduct')
const transactionHistory = require('./product/transactionHistory')
const purchaseProduct = require('./product/purchaseProduct')


module.exports = {
    getListProducts,
    getProductDetails,
    insertProduct,
    purchaseProduct,
    transactionHistory,
    updateProduct
}