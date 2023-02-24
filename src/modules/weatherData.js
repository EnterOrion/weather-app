const apiKey = "b897024214ad0e85c66721a70404e0f7";
const form = document.querySelector("form");
const body = document.querySelector("body");
const cityName = document.getElementById("city-name");

// Display London as the default city
let cityQuery = "London";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cityQuery = cityName.value;
  cityName.value = "";
  requestWeather();
});

async function requestWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&units=metric&APPID=${apiKey}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    displayWeather(weatherData);
  } catch (error) {
    const weatherError = document.getElementById("name");
    const conditions = document.getElementById("conditions");
    const temp = document.getElementById("temp");
    const tempLike = document.getElementById("temp-like");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    weatherError.innerHTML = "City not found!";
    conditions.innerHTML = "N/A";
    temp.innerHTML = "<strong>Temperature:</strong>" + " " + "N/A";
    tempLike.innerHTML = "<strong>Feels like:</strong>" + " " + "N/A";
    humidity.innerHTML = "<strong>Humidity:</strong>" + " " + "N/A";
    wind.innerHTML = "<strong>Wind speed:</strong>" + " " + "N/A";
  }
}

const displayWeather = function (response) {
  const weather = {
    name: response.name,
    conditions: response.weather[0].description,
    temp: response.main.temp,
    tempLike: response.main.feels_like,
    humidity: response.main.humidity,
    wind: response.wind.speed,
  };

  const weatherCity = document.getElementById("name");
  const weatherConditions = document.getElementById("conditions");
  const weatherTemp = document.getElementById("temp");
  const weatherFeelsLike = document.getElementById("temp-like");
  const weatherHumidity = document.getElementById("humidity");
  const weatherWind = document.getElementById("wind");

  const capitalizeLetter = weather.conditions[0].toUpperCase();
  let baseConditions = weather.conditions.substr(1);
  const capitalizeConditions = capitalizeLetter + baseConditions;

  weatherCity.innerHTML = weather.name;
  weatherConditions.innerHTML = capitalizeConditions;
  weatherTemp.innerHTML =
    "<strong>Temperature:</strong>" + " " + weather.temp + " " + "C°";
  weatherFeelsLike.innerHTML =
    "<strong>Feels like:</strong>" + " " + weather.tempLike + " " + "C°";
  weatherHumidity.innerHTML =
    "<strong>Humidity:</strong>" + " " + weather.humidity + "%";
  weatherWind.innerHTML =
    "<strong>Wind speed:</strong>" + " " + weather.wind + " " + "km/h";

  let rainExp = /[R-r]ain/;
  let sunExp = /[S-s]un/;
  let clearExp = /[C-c]lear/;
  let thunderExp = /[T-t]hunder/;
  let snowExp = /[S-s]now/;
  let drizzleExp = /[D-d]rizzle/;
  let sleetExp = /[S-s]leet/;
  let sandExp = /[S-s]and/;
  let ashExp = /[A-a]sh/;

  // Change background image based on conditions
  if (thunderExp.test(capitalizeConditions) == true) {
    body.style.backgroundImage = "var(--thunder)";
  } else if (
    snowExp.test(capitalizeConditions) == true ||
    sleetExp.test(capitalizeConditions) == true
  ) {
    body.style.backgroundImage = "var(--snowy)";
  } else if (
    rainExp.test(capitalizeConditions) == true ||
    drizzleExp.test(capitalizeConditions) == true
  ) {
    body.style.backgroundImage = "var(--rainy)";
  } else if (
    sunExp.test(capitalizeConditions) == true ||
    clearExp.test(capitalizeConditions) == true
  ) {
    body.style.backgroundImage = "var(--sunny)";
  } else if (capitalizeConditions == "Mist" || capitalizeConditions == "Fog") {
    body.style.backgroundImage = "var(--misty)";
  } else if (
    capitalizeConditions == "Smoke" ||
    capitalizeConditions == "Haze" ||
    capitalizeConditions == "Dust" ||
    sandExp.test(capitalizeConditions) == true ||
    ashExp.test(capitalizeConditions) == true
  ) {
    body.style.backgroundImage = "var(--smog)";
  } else {
    body.style.backgroundImage = "var(--cloudy)";
  }
};

requestWeather();
export default displayWeather;
