const menu = document.querySelector("#menuButton");
const navi = document.getElementById("nav");
const gallery = document.querySelector(".gallery");

handleResize();
window.addEventListener("resize", handleResize);

let shown = false;

menu.addEventListener("click", showMenu);

gallery.addEventListener("click", viewHandler);

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

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}" id="viewer-img">
    </div>`;
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    let pic = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    let source = pic.src;
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    let newHTML = document.body.insertAdjacentHTML("afterbegin", viewerTemplate(source, "mountains"));
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
    let html = document.querySelector(".viewer");

    if (html) {
        html.remove();
    }
}