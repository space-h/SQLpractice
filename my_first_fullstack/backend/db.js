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
        return rows;
        
    } catch (error) {
        throw new Error(error);

    }

};

const fetchCityById = async (id) => {
    try {
        const selectQuery = 'SELECT * FROM `cities` WHERE id=?;';
        const result = await pool.query(selectQuery, id);
        return result[0];
        
    } catch (error) {
        throw new Error(error);
    }

};

const createCity = async (city) => {
    try {
        const result = await pool.query('INSERT INTO `cities` SET ?', city);
          return result[0];
        
    } catch (error) {
        throw new Error(error);
        
    }
};

const deleteCityById = async (id) => {
    try {
        const deleteQuery = 'DELETE FROM `cities` WHERE id=?;';
        const result = await pool.query(deleteQuery, id);
        return result[0];
        
    } catch (error) {
        throw new Error(error);
    }
}

const updateCity = async (city) => {
    try {
        const updateQuery = 'UPDATE `cities`SET city = ?, country = ? WHERE id = ?;';
        const result = await pool.query(updateQuery, [city.city, city.country, city.id]);
         return result[0];
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
createCity,
deleteCityById,    
fetchCities,
fetchCityById,
updateCity
}