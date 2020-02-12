const clockContainer = document.querySelector(".js-clock");
const colckTitle = document.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    colckTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){
    getTime();
}

init();