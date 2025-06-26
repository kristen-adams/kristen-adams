const phrases = [
    "storyteller.",
    "developer.",
    "movie lover."
];

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let currentText = "";
let delay = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        currentText = currentPhrase.substring(0, letterIndex--);
    } else {
        currentText = currentPhrase.substring(0, letterIndex++);
    }

    typedText.textContent = currentText;

    if (!isDeleting && letterIndex === currentPhrase.length) {
        isDeleting = true;
        delay = 1000; // pause before deleting
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 200;
    } else {
        delay = isDeleting ? 50 : 100;
    }

    setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});