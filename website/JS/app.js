const btn = document.getElementById('btn');
const zip = document.getElementById('zip');
const mood_pick = document.getElementById('mood-pick');
const date = document.getElementById('date'); 
const city = document.getElementById('city'); 
const icon = document.getElementById('icon'); 
const wind = document.getElementById('wind'); 
const lat = document.getElementById('lat'); 
const long = document.getElementById('long'); 
const temp = document.getElementById('temp'); 
const mood = document.getElementById('mood'); 
const full = document.getElementById('full'); 
const iconimage = document.getElementById('icon-image'); 
const postURL = 'http://localhost:3000/weather';
const getURL = 'http://localhost:3000/data';


btn.addEventListener("click", clickEvent);

// async function() {
//     let response = await callAPI(zip.value, mood_pick.value);
//     console.log(response);

async function clickEvent() {
    try{
        const response = await callAPI(zip.value);
        // console.log('Return: ', response)
        const rBody = formRequestBody(response);
        console.log('RBODY:', rBody);
        const postRespose = await postData(rBody);
        console.log('POST RESPOSE', postRespose);
        const newData = await getData();
        console.log('NEW DATA: ',newData);
        weatherData(newData);

        }
    catch (err){
        console.log(err.message);
    }
}

function formRequestBody(response){
    
    const data = {
        temp: response.main.temp,
        lat: response.coord.lat,
        lon: response.coord.lon,
        user: mood_pick.value
    };

    // console.log(data);

    return data
}

async function callAPI(zip){
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=81c30a80ddd5b3a82bcf35083a43ed9c`
        let response = await fetch(url);
        let resJSON = await response.json();
        // let postResponse = await postData(resJSON);
        // console.log('POST Respopnse:', postResponse);
        //console.log(resJSON);
        // console.log(data);
        // console.log(data.main.temp);
        return resJSON;
        
}


async function postData(data) {
    const response = await fetch(postURL, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

    return response
  }
  

async function getData()
  {
    let response = await fetch(getURL);
    let resJSON = await response.json();
    console.log("GET Result", resJSON);

    return resJSON;
  } 


function weatherData(data) {

    date.textContent = `DATE: ${data.date}`;
    city.textContent = `City: ${data.city}`;
    wind.textContent = `Wind: ${data.wind}`;
    lat.textContent = `Lattitude: ${data.lat}`;
    long.textContent = `Longitude: ${data.lon}`;
    temp.textContent = `TEMP: ${data.temp}`;
    mood.textContent = `Mood: ${data.user}`;

    var iconurl = "http://openweathermap.org/img/w/" + data.icon + ".png";
    iconimage.innerHTML = `<img src="${iconurl}" alt="">`

}