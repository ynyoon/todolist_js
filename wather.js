const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "6cac801d41e0e0de4ecdb38cb46c2311";

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        //console.log(response);
        return response.json();
    }).then(function(json){
        console.log(json)
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}ºC, ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Cant access geo location");
}


function askforCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedcoords = localStorage.getItem(COORDS);
    if(loadedcoords === null){
        askforCoords();
    }else{
        const parseCoords = JSON.parse(localStorage.getItem(COORDS));
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();