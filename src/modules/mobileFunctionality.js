const form = document.querySelector("form");


const addEvent = () => {
    form.addEventListener('keyup', (keyboardEvent) => {
        if (keyboardEvent.code === 13 || keyboardEvent.code === 'Enter') {
        form.blur();
    }
    });
}

export default addEvent;