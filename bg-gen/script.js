var css = document.querySelector("h3"); // creating variable to select h3 class
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//always use console.log(classname); to test things are working. use browser inspector, console tab, refresh page
// and you will see the DOM show h3, color1 and color2

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);