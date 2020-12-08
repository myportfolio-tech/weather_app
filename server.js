const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');


const dotenv = require('dotenv');
dotenv.config();



// const port = process.env.PORT; // 8626
// const key = process.env.API_KEY;
// const root_url = process.env.API_URL; 


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

    console.log('Received request');
projectData.temp = req.body.temp,
projectData.lat = req.body.lat,
projectData.lon = req.body.lon,
projectData.user = req.body.user

console.log('POST', projectData);
res.send(projectData);
});


app.get('/data', (req, res) => {
    console.log(projectData);
    res.send(projectData);
});



function createPackage(data){
    let date = new Date();
    // console.log(date.toDateString());

    const package = {
        "date" : date.toDateString(),
        "city" : data.name,
        "icon" : data.weather[0].icon,
        "wind" : data.wind.speed,
        "temp" : data.main.temp,
        "long" : data.coord.lon,
        "lat" : data.coord.lat,
    };

    return package;
}


app.listen(port, () => console.log(`listening on port ${port}`));