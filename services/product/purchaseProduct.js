// *purchaseProduct

const mysql = require('../../database/mysql')

const purchaseProduct = (req, res) => {
    // Get query parameters
    const { inventoryID, quantity } = req.query

    // Check if inventoryID and quantity are declared
    let missingField = []

    if(!inventoryID) missingField.push("inventoryID")
    if(!quantity) missingField.push("quantity")

    if(missingField.length > 0) throw res.json({ message: `Missing required fields: ${missingField.join(", ")}` })

    // Build the query
    const query = ` CALL purchaseTransaction(${inventoryID}, ${quantity})`

    // Execute the query
    return mysql.query(query, (error, result) => {

        // Error handling, throw error if there is one
        if(error) throw res.json({ message: error })

        // Return the result if no error
        return res.json({ message: result })
    })
}

module.exports = purchaseProduct