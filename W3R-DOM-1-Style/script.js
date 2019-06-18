"Use Strict";
let answer = document.getElementById("answer");
let button = document.getElementById("button");

function js_style() {
    answer.classList.toggle("dark");
    button.innerHTML = button.innerHTML == "Dark" ? "Light" : "Dark";
}