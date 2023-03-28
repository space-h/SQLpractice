const express = require('express');
const router = express.Router();


const { createCity, deleteCityById, fetchCities, fetchCityById, updateCity } = require('./db');

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
        const data = await fetchCityById(id);
        if (data.length == 1) {
            res.send(data[0]);
        } else {
            res.status(404).send('City Not Found');
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
        
    }

});

router.post('/', async (req, res) => {
    const city = {
        city: req.body.city,
        country: req.body.country
    };
    try {
        const response = await createCity(city);
        if(response.affectedRows == 1){
            city.id = response.insertId;
            res.send(city);
        } else {
            throw new Error();
        }

        
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
        
    }

});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const response = await deleteCityById(id);
        if (response.affectedRows ==1) {
            res.send('City deleted');
        } else {
            res.status(404).send('City not found');
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }

});

router.put('/', async (req, res) => {
    const city = {
        id: req.body.id,
        city: req.body.city,
        country: req.body.country
    }
    try {
        const response = await updateCity(city);
        if (response.affectedRows == 1) {
            res.send('City Updated');
        } else {
            res.status(404).send('City not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
});



module.exports = router; 