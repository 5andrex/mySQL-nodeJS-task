const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "beyondthebox"
})

connection.connect((error) => {
    if(error) throw error
    console.log("Connected to the database port:", mysql.createConnection.port)
})

module.exports = connection