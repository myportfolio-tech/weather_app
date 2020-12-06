const btn = document.getElementById('btn');
const displayBox = document.getElementById('display-box');

const zip = document.getElementById('zip');
const user = document.getElementById('user-feel');

btn.addEventListener("click", function() {
    startProcess();
});

function startProcess() {
    console.log('Hello');
    const text = `${zip.value} <br> ${user.value}` // \n 
    displayBox.innerHTML = text;
}


// function() {
//     displayContainerInfo();
// });



// document.addEventListener('scroll', function() {
//     displayContainerInfo();
// });
