const form = document.querySelector("form");
const search = document.getElementById("cityName");


const addEvent = () => {
    form.addEventListener('keyup', (keyboardEvent) => {
        if (keyboardEvent.code === 13 || keyboardEvent.code === 'Enter') {
        search.blur();
    }
    });
}

export default addEvent;