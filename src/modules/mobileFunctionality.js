const search = document.getElementById("city-name");

// Removes focus on input after user has entered the city
const addEvent = () => {
  search.addEventListener("keydown", (keyboardEvent) => {
    if (keyboardEvent.code === 13 || keyboardEvent.code === "Enter") {
      search.blur();
    }
  });
};

export default addEvent;
