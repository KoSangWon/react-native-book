const WEATHER_API_KEY = "9f7e9d1141462d0344352a2b83d01dc5";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip){
    return `${API_STEM}q=${zip}&units=imperial&appid=${WEATHER_API_KEY}`;
}

function fetchForecast(zip){
    return fetch(zipUrl(zip))
        .then(response => response.json())
        .then(responseJSON => {
            return {
                main: responseJSON.weather[0].main,
                description: responseJSON.weather[0].description,
                temp: responseJSON.main.temp
            };
        })
        .catch(error => {
            console.log(error);
        });
}

export default {fetchForecast: fetchForecast}