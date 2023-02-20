// * transactionHistory

const mysql = require("../../database/mysql")

const transactionHistory = (req, res) => {
    // Get query parameters

    // Build the query
    const query = ` SELECT * FROM purchase_transaction;`

    // Execute the query
    return  mysql.query(query, (error, result) => {
        if(error) throw res.json({ message: error })
        res.json(result)
    })
}

module.exports = transactionHistory