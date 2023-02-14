const search = document.getElementById("cityName");


const addEvent = () => {
    search.addEventListener('keyup', (keyboardEvent) => {
        if (keyboardEvent.code === 'Enter') {
        search.blur();
    }
    });
}

export default addEvent;