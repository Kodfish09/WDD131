const menu = document.querySelector("#menuButton");
const navi = document.getElementById("nav");

handleResize();
window.addEventListener("resize", handleResize);

let shown = false;

menu.addEventListener("click", showMenu);

function showMenu() {
    if (shown == false) {
        navi.style.display = "block";
        shown = true;
    } else {
        navi.style.display = "none";
        shown = false;
    }
}

function handleResize() {
    if (innerWidth > 1000) {
        navi.style.display = "block";
    }
}