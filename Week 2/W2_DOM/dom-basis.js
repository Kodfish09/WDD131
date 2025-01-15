const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "img made with Jacascript!");
document.body.appendChild(newImage);

const newSec = document.createElement("section");
newSec.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>"
document.body.appendChild(newSec);