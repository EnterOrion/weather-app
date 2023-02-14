const search = document.getElementById("cityName");


const addEvent = () => {
    search.addEventListener('keyup', (keyboardEvent) => {
        if (keyboardEvent.code == 13) {
        element.blur();
    }
    });
}

export default addEvent;