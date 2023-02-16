const search = document.getElementById("cityName");

// Removes focus on input after user has entered the city
const addEvent = () => {
  search.addEventListener("keyup", (keyboardEvent) => {
    if (keyboardEvent.code === 13 || keyboardEvent.code === "Enter") {
      search.blur();
    }
  });
};

export default addEvent;
