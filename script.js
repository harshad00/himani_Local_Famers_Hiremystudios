// Burger menu toggle script -----
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// script to display current time         ----
function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    currentTimeElement.textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime(); //Initial call to set the time immediately

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}
function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

// For Subscribe -----
function subscribe() {
    var email = document.getElementById("email").value    ;
    if(email){
        alert("Thank you for subscribing! We'll keep you updated on upcoming events");

    } else {
        alert("Please enter a valid email address");
    }
}

// For footer -----
const year = document.querySelector('#current-year')
year.innerHTML = new Date().getFullYear()