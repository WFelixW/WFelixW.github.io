document.addEventListener("DOMContentLoaded", () => {

```
const text =
    "Embedded Systems • PCB Design • Robotics • EV Technology";

const typingElement =
    document.getElementById("typing");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
});
```

});
