/* Letter animation for Welcome */
document.addEventListener('DOMContentLoaded', () => {
    const welcomeText = "Welcome";
    const welcomeElement = document.getElementById('welcome-text');

    welcomeText.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('letter')
        span.style.animationDelay = `${index * 0.2}s`;
        welcomeElement.appendChild(span);
    });
});