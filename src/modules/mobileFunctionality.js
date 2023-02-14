const search = document.getElementById("cityName");


const addEvent = () => {
    search.addEventListener('keyup', (keyboardEvent) => {
        if (key.keyCode === 13 || keyboardEvent.code === 'Enter') {
        search.blur();
    }
    });
}

export default addEvent;