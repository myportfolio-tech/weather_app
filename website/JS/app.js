const btn = document.getElementById('btn');
const zip = document.getElementById('zip');
const mood_pick = document.getElementById('mood-pick');
const date = document.getElementById('date'); 
const city = document.getElementById('city'); 
const icon = document.getElementById('icon'); 
const wind = document.getElementById('wind'); 
const coord = document.getElementById('coord'); 
const lon = document.getElementById('long'); 
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
        console.log('Return: ', response)
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
        user: mood_pick.value,
        city: response.name,
        wind: response.wind.speed,
        icon: response.weather[0].icon,
        general: response.weather[0].main

    };

    console.log('DATA:', data);

    return data
}

async function callAPI(zip){
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=81c30a80ddd5b3a82bcf35083a43ed9c`
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

  console.log('FINAL DATA: ',data)

    date.innerHTML = data.date;
    city.innerHTML = data.city;
    wind.innerHTML = `${data.wind} m/h`;
    temp.innerHTML = `${data.temp} &#176; F`;
    mood.innerHTML = data.user;
    coord.innerHTML = `${data.lat} lat. / ${data.lon} long.`;
    

    var iconURL = "http://openweathermap.org/img/w/" + data.icon + ".png";
    console.log(iconURL)
    iconimage.innerHTML = `<img src="${iconURL}" alt="">`

}