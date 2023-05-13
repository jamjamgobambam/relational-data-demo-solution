const pool = require('../config/database.js')

const getHairStylists = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM hair_stylists ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json( {error: error.message} )
    }
}

const getHairStylistById = async (req, res) => {
    try {
        const stylistId = parseInt(req.params.id)
        const results = await pool.query('SELECT * FROM hair_stylists WHERE id=$1', [stylistId])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(400).json( {error: error.message} )
    }
}

module.exports = {
    getHairStylists,
    getHairStylistById
}