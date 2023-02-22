const express = require('express')
const path = require('path')
const router = express.Router()
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')

// Use the API routes
router.use("/api/v1", apiRoutes)

// Use the web routes
router.use("/", webRoutes)

module.exports = router