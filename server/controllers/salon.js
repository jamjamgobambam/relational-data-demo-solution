const pool = require('../config/database.js')

// union - retrieve the names of all the hair styles and hair stylists, even those
// that are not associated with any appointments, and combine them into a single list
const unionQuery = `
SELECT name FROM hair_styles
UNION
SELECT name FROM hair_stylists;
`

const getSalonInfo = async (req, res) => {
    try {
        const results = await pool.query(unionQuery)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json( {error: error.message} )
    }
}

module.exports = {
    getSalonInfo
}