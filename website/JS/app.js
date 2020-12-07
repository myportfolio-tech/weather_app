const btn = document.getElementById('btn');
const zip = document.getElementById('zip');
const mood_pick = document.getElementById('mood-pick');
const city = document.getElementById('city'); 
const icon = document.getElementById('icon'); 
const wind = document.getElementById('wind'); 
const lat = document.getElementById('lat'); 
const long = document.getElementById('long'); 
const temp = document.getElementById('temp'); 
const mood = document.getElementById('mood'); 
const iconimage = document.getElementById('icon-image'); 


btn.addEventListener("click", function() {
    callAPI(zip.value, mood_pick.value);
});

// async function startProcess() {
//     try{
//         const weather = await callAPI(zip.value, user.value);
//         console.log('Return: ', weather)
//         displayBox.innerHTML = weather;//.main.temp;
//         }
//     catch (err){
//         console.log(err.message);
//     }
// }


// async function callAPI(zip){
//         const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=81c30a80ddd5b3a82bcf35083a43ed9c`
//         let response = await fetch(url);
//         let data = await response.json()

//         console.log(data);
//         console.log(data.main.temp);
//         return data
// }

async function callAPI(zip, user){

    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            zipcode: zip
        })

    }).then(res => res.json()).then(data => {
        console.log(data);
        weatherData(data, user);
    });

}



function weatherData(data, user) {
    // icon.innerHTML = `City: ${data.name}`;
    // wind.innerHTML = `Wind: ${data.wind.speed}`;
    // lat.innerHTML = `Lattitude: ${data.coord.lat}`;
    // long.innerHTML = `Longitude: ${data.coord.lon}`;
    // temp.innerHTML = `TEMP: ${data.main.temp}`;
    // mood.innerHTML = `Mood: ${user}`;

    city.textContent = `City: ${data.name}`;
    iconimage.textContent = `Icon: ${data.weather[0].icon}`;
    wind.textContent = `Wind: ${data.wind.speed}`;
    lat.textContent = `Lattitude: ${data.coord.lat}`;
    long.textContent = `Longitude: ${data.coord.lon}`;
    temp.textContent = `TEMP: ${data.main.temp}`;
    mood.textContent = `Mood: ${user}`;

    var iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    iconimage.innerHTML = `<img src="${iconurl}" alt="">`

}