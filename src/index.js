import "./style/style.scss";


const test = function() {
    let testDiv = document.getElementById("test");
    let testParagraph = document.createElement("p");
    testParagraph.innerHTML = "Hello weather app!";
    testDiv.appendChild(testParagraph);
}

test();