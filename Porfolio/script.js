const words = ["Programmer", "Project Specialist", "Graphic Designer","Business IT Executive"];
let i = 0;
const span = document.querySelector(".multiple-text");

function changeWord() {
    span.textContent = words[i];
    i = (i + 1) % words.length;
}

changeWord(); // show first word
setInterval(changeWord, 2000); // tukar setiap 2 saat