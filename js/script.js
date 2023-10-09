// typing effect

function runTypingEffect() {
    const text = 'I am Benjahmin Koenigsberg.';
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 125;

    typeText(text, typingElement, typingDelay)

}


function typeText(text, element, delay) {

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.textContent += text.charAt(i);
        }, delay * i)
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
