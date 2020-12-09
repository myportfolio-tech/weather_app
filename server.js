const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');


const dotenv = require('dotenv');
dotenv.config();


const port = 3000;
const key = '81c30a80ddd5b3a82bcf35083a43ed9c';

projectData = {};
projectExtras = {};

app.use(express.static('website'));
app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(cors());

// app.get('/weather', (req, res) => {
//     res.send(entries)
// });

app.post('/weather', (req, res) => {

let date = new Date();

projectData.temp = req.body.temp,
projectData.lat = req.body.lat,
projectData.lon = req.body.lon,
projectData.user = req.body.user
projectData.date = date.toDateString(),
projectData.city = req.body.city,
projectData.icon = req.body.icon,
projectData.wind = req.body.wind,
projectData.general = req.body.general

res.send(projectData);
});


app.get('/data', (req, res) => {
    res.send(projectData);
});



app.listen(port, () => console.log(`listening on port ${port}`));