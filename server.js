const express = require('express');
const app = express();
const axios = require('axios');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT; // 8626
const key = process.env.API_KEY;
const root_url = process.env.API_URL; 


const entries = [{id: 1, name: 'course1'},
{id: 2, name: 'course2'},
{id: 3, name: 'course3'},
{id: 4, name: 'course4'}];


app.use(express.static('website'));
app.use(express.json());
app.use(express.urlencoded( {extended: true}));

// app.get('/weather', (req, res) => {
//     res.send(entries)
// });

app.post('/weather', (req, res) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${req.body.zipcode},us&appid=${key}`;
    
    axios.get(url)
        .then(data => {
            // console.log(data.data);
            res.json(data.data);})
            // console.log('HERE');
            // console.log(response.status);
            // console.log(response.data);
        .catch(error => {
            console.log(error);
        })


});


app.listen(port, () => console.log(`listening on port ${port}`));