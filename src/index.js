import "./style/style.scss";
import displayWeather from "./modules/weatherData";
import addEvent from "./modules/mobileFunctionality";

const main = function() {
 
    displayWeather();
    addEvent();
}


main();