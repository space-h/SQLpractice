const express = require('express');
const router = express.Router();


const { fetchCities } = require('./db');

router.get('/', async (req, res)=> {
    try {
        const data = await fetchCities();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
        
    }

});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        fetchCityById(id);
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
        
    }

});

module.exports = router; 