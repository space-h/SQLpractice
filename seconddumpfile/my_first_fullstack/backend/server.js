const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

const CITIES = [
  {
    id: 1,
    city: "Oslo",
    country: "Norway"
  },{
    id: 2,
    city: "Paris",
    country: "France"
  },{
    id: 3,
    city: "Pretoria",
    country: "South Africa"
  }
];

app.use((req, res, next) => {
  console.log('Time: ' + Date.now());
  //res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', (req, res) => {
  res.send('👋 Hello Backend 👋');
});

app.get('/api/', (req, res) => {
  res.json({message: '👋👋👋 Hello API 👋👋👋'});
});

app.get('/api/cities/', (req, res) => {
  res.send(CITIES);
});

app.get('/api/cities/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const city = CITIES.find(item => item.id === id);
  
  if(city) {
    res.send(city);
  } else {
    res.status(404).send('City not found');
  }
});

app.post('/api/cities/', (req, res) => {
  console.log(req.body)
  const city = {
    id: CITIES.length + 1,
    city: req.body.city,
    country: req.body.country,
  };

  CITIES.push(city);
  res.send(city);
});

app.put('/api/cities/', (req, res) => {
  console.log(req.body)
  const id = parseInt(req.body.id);

  const cityIndex = CITIES.findIndex(item => item.id === id);
  if(cityIndex === -1) {
    res.status(404).send('City not found, can not update');
    return;
  }

  const updatedCity = CITIES.find(item => item.id === id);
  updatedCity.city = req.body.city;
  updatedCity.country = req.body.country;

  CITIES[cityIndex] = updatedCity;
  res.send(updatedCity);
});


app.delete('/api/cities/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const city = CITIES.find((c) => c.id === id);
  if (!city) {
    res.status(404).send('City not found');
    return;
  }
  const index = CITIES.indexOf(city);
  CITIES.splice(index, 1);
  res.send(city);
});

app.listen(PORT, () => {
  console.log(`BACKEND RUNNING on PORT ${PORT}`);
});
