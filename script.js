const text = "Embedded Systems • PCB Design • Robotics • EV Technology";
const typingElement = document.getElementById("typing");

let i = 0;

function typeWriter() {
if (i < text.length) {
typingElement.innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter, 60);
}
}

window.onload = typeWriter;
