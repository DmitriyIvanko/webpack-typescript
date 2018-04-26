require("./assets/scss/app.scss");

function component() {
    var element = document.createElement("div");

    element.innerHTML = ["Hello", "webpack"];
    element.classList.add("col-xs-5");
    element.classList.add("test");

    return element;
}

document.body.appendChild(component());
