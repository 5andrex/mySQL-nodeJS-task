// * getProductDetails

const mysql = require('../../database/mysql')

const getProductDetails = (req, res) => {
    // Get query parameters
    const { model } = req.query

    // Check if product_model is declared
    if (!model) throw res.json({ message: "Error: Product Model missing!"})


    // Build the query
    const query = ` SELECT * FROM apple_product WHERE product_model LIKE '%${model}%'`

    // Execute the query
    return mysql.query(query, (error, result) => {
        
        // Error handling, throw error if there is one
        if(error) throw res.json({ message: error })

        // Check if result is empty array
        if (result.length === 0) return res.json({ message: "Product not found"})

        // Return the result if no error
        res.json(result)
    })
}

module.exports = getProductDetails