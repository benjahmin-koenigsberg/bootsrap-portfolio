//typing effect variables
const text = 'I am Benjahmin Koenigsberg.';
const typingElement = document.getElementById('typing-text');
const typingDelay = 100;

//run typing function
function runTypingEffect() {
    typeText(text, typingElement, typingDelay)

    //run repeat typing function

   // setTimeout(repeatType, 5500)
}

// typing effect function
function typeText(text, element, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.textContent += text.charAt(i);
        }, delay * i)
    }
}

//rerun typing efect function
function repeatType(){
        typingElement.textContent = '';
        runTypingEffect();
}

//auto run function on page load
document.addEventListener('DOMContentLoaded', runTypingEffect);
