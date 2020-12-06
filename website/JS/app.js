// const key = env.API_KEY;
// const root_url = env.API_URL; 

// console.log(key)
// console.root_url

const btn = document.getElementById('btn');
const displayBox = document.getElementById('display-box');

const zip = document.getElementById('zip');
const user = document.getElementById('user-feel');

btn.addEventListener("click", function() {
    startProcess();
});

async function startProcess() {
    try{
        const text = `${zip.value} <br> ${user.value}` // \n 
        const weather = await callAPI(zip.value);
        displayBox.innerHTML = weather.main.temp;
        }
    catch {
        console.log(err.message);
    }
}


async function callAPI(zip){
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=81c30a80ddd5b3a82bcf35083a43ed9c`
        let response = await fetch(url);
        let data = await response.json()

        console.log(data);
        console.log(data.main.temp);
        return data
}

// function() {
//     displayContainerInfo();
// });



// document.addEventListener('scroll', function() {
//     displayContainerInfo();
// });
