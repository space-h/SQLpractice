const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'cities_password',
    database: 'cities_db'

});

const fetchCities = async () => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM `cities`;')
        console.log(rows);
        return rows;
        
    } catch (error) {
        throw new Error(error);

    }

};

const fetchCityById = async (id) => {
    try {
        const selectQuery = 'SELECT * FROM `cities` WHERE id=?;';
        pool.query(selectQuery, id);
        
    } catch (error) {
        throw new Error(error);
    }

};

module.exports = {
fetchCities
}