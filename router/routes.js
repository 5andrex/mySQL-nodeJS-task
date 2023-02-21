const express = require('express')
const path = require('path')
const router = express.Router()
const ProductService = require('../services/functions')
const connection = require('../database/mysql')

// Serve static files from the public directory
router.use(express.static(path.join(__dirname, '../public')));

// Create the routes
router.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname + '/../public/index.html'));
})

router.get('/data/sql', (req, res) => {
    // Get the database name from the connection
    const database = connection.config.database

    return res.json({
        dbName: database
    })
})

// Create the appServices routes
router.get("/getListProducts", ProductService.getListProducts);
router.post("/getProductDetails", ProductService.getProductDetails);
router.post("/insertProduct", ProductService.insertProduct);
router.post("/updateProduct", ProductService.updateProduct);
router.get("/transactionHistory", ProductService.transactionHistory);
router.post("/purchaseProduct", ProductService.purchaseProduct);

module.exports = router