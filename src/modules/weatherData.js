const apiKey = "b897024214ad0e85c66721a70404e0f7";
const form = document.querySelector("form");
let cityQuery = "London";



form.addEventListener("submit", (e) => {
    e.preventDefault();
    cityQuery = cityName.value;
    cityName.value = "";
    requestWeather();
})



async function requestWeather() { 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&units=metric&APPID=${apiKey}`, {mode: 'cors'
});
    const weatherData = await response.json();
    displayWeather(weatherData);
               
                       
}

const displayWeather = function(response) {
    const weather = {
        name: response.name,
        conditions: response.weather[0].description,
        temp: response.main.temp,
        tempLike: response.main.feels_like, 
        humidity: response.main.humidity,
        wind: response.wind.speed
    }

        const weatherCity = document.getElementById("name");
        const weatherConditions = document.getElementById("conditions");
        const weatherTemp = document.getElementById("temp");
        const weatherFeelsLike = document.getElementById("tempLike");
        const weatherHumidity = document.getElementById("humidity");
        const weatherWind = document.getElementById("wind");

        const capitalizeLetter = weather.conditions[0].toUpperCase();
        let baseConditions = weather.conditions.substr(1);
        const capitalizeConditions = capitalizeLetter + baseConditions; 

        weatherCity.innerHTML = weather.name;
        weatherConditions.innerHTML = capitalizeConditions;
        weatherTemp.innerHTML = "Temperature:" + " " + weather.temp;
        weatherFeelsLike.innerHTML = "Feels like:" + " " + weather.tempLike;
        weatherHumidity.innerHTML = "Humidity:" + " " + weather.humidity;
        weatherWind.innerHTML = "Wind speed:" + " " + weather.wind;

}

requestWeather();
export default displayWeather;