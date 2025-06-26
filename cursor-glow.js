const glow = document.getElementById("glow");

document.addEventListener("mousemove", (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});