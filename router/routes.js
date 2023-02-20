const express = require('express')
const router = express.Router()
const ProductService = require('../services/functions')

// Create the routes
router.get('/', (req, res) => {
    res.send('Hello World')
})

// Create the appServices routes
router.get("/getListProducts", ProductService.getListProducts);
router.post("/getProductDetails", ProductService.getProductDetails);
router.post("/insertProduct", ProductService.insertProduct);
router.post("/updateProduct", ProductService.updateProduct)

module.exports = router