const express = require('express')
const router = express.Router()
const ProductService = require('../../services/functions')

// Create the appServices routes
router.get("/getListProducts", ProductService.getListProducts);
router.post("/getProductDetails", ProductService.getProductDetails);
router.post("/insertProduct", ProductService.insertProduct);
router.post("/updateProduct", ProductService.updateProduct);
router.get("/transactionHistory", ProductService.transactionHistory);
router.post("/purchaseProduct", ProductService.purchaseProduct);

module.exports = router