const express = require('express')
const router = express.Router()
const path = require('path')
const connection = require('../../database/mysql')

// Integrate Bootstrap
router.use('/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')));
router.use('/js', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/js')));

// Serve static files from the public directory
router.use(express.static(path.join(__dirname, '../../public')));

// Create the routes
router.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../../public/index.html'));
})

router.get('/data/sql', (req, res) => {
    // Get the database name from the connection
    const database = connection.config.database

    return res.json({
        dbName: database
    })
})

// Display the HTML page
router.get('/product/:id', (req, res) => {
    return res.sendFile(path.join(__dirname + '/../public/products/details.html'));
})

module.exports = router