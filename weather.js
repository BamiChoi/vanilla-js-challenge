const weatherText = document.querySelector(".weather__text");
const weather = document.querySelector(".js-weather");

const microDustText = document.querySelector(".microDust__text");
const microDust = document.querySelector(".js-microDust");

const COORDINATION = "coordination"
const API_KEY = "f5aae4e942b554dc5481043be1cbd8c7"
const API_TOKEN = "00a1104cc641b7adb4ae7c3634ae877749805f8f"

const kr = "kr"

function getWeather(lat, lon) {
     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${kr}`
     ).then(function(response) {
         return (response.json());
     }).then(function(json) {
         const temperature  = json.main.temp;
         const description = json.weather[0].description;
         const icon = json.weather[0].icon;
         const img = new Image();
         img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

         weather.prepend(img);
         weatherText.innerText = `${temperature} °C ${description}`;
     });
}

function getMicroDust(lat, lon){
    fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${API_TOKEN}`
    ).then(function(response) {
        return (response.json());
    }).then(function(json) {
        const aqi = json.data.aqi;
        const aqiBedge = document.createElement("div");
        aqiBedge.classList.add("aqiBedge");
        if( aqi <= 50) {
            aqiBedge.classList.add("good");
            microDustText.innerText = `미세먼지 : 좋음`;
        } else if (aqi > 50 && aqi <= 100 ){
            aqiBedge.classList.add("moderate")
            microDustText.innerText = `미세먼지 : 보통`;
        } else if (aqi > 100 && aqi <=150){
            aqiBedge.classList,add("unhealthy");
            microDustText.innerText = `미세먼지 : 나쁨`;
        } else if (aqi > 150){
            aqiBedge.classList,add("veryUnhealthy");
            microDustText.innerText = `미세먼지 : 매우나쁨`;
        } 
        microDust.prepend(aqiBedge);
        aqiBedge.innerText = `${aqi}`;
        
    });

}

function saveCoordination(coordinationObj) {
    localStorage.setItem(COORDINATION, JSON.stringify(coordinationObj))
}

function handleSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordinationObj = {
        latitude,
        longitude
    }
    saveCoordination(coordinationObj);
    getWeather(latitude, longitude);
    getMicroDust(latitude, longitude);
}

function handleFail() {
    console.log("Cant access your cordination");
}

function askLocation() {
    navigator.geolocation.getCurrentPosition(handleSucces, handleFail);
}

function loadCoordination() {
    const loadedCoordination = localStorage.getItem(COORDINATION);
    if (loadedCoordination === null){
        askLocation();
    } else {
        const parseCoordination = JSON.parse(loadedCoordination);
        getWeather(parseCoordination.latitude, parseCoordination.longitude);
        getMicroDust(parseCoordination.latitude, parseCoordination.longitude);
        
    } 
}

function init(){
    loadCoordination()
   
}
init();