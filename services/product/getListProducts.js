// * getListProducts (with pagination and search. Search criteria => product name and description)

const mysql = require('../../database/mysql')

const getListProducts = (req,res) => {
    // Get the query parameters
    const { page, limit, search } = req.query

    // Use the MySQL database query
    let query = `SELECT * FROM apple_product`

    // Add the search query
    if (search) query += ` WHERE product_model LIKE '%${search}%' `
    
    // Add the limit
    if (limit) query += ` LIMIT ${limit}`

    // Add page offset
    if (page && page > 1) query += `, ${page - 1 * limit}`

    // Execute the query
    return mysql.query(query, (error, result) => {
        
        // Error handling, throw error if there is one
        if(error) throw res.send({ message: error})

        // Return the result if no error
        res.send(result)
    })
}

module.exports = getListProducts