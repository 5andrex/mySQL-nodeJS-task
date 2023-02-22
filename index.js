console.log("hello world")

// Call the required packages

const express = require('express')
const parser = require('body-parser')
const routes = require('./router/routes')
const connection = require('./database/mysql')

// Instantiate the app
const app = express()

// Set the port
const port = 5500

// Create the routes
app.use(routes)

// Set the app listener
app.listen(port, () => {
    console.log("Listening on port:", port)
})

