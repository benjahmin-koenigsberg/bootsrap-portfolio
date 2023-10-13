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

//check if user scrolled back to the top

//document.addEventListener('scroll', rerunOnScroll);

//run on scroll to top of page
function rerunOnScroll(){
    if (window.scrollY == 0) {
        //user scrolled to the top of the page
        repeatType();
    }
}
