"use strict";



const cards = document.querySelectorAll(".hidden"); 
const animationPoint = 150;
const windowHeight = window.innerHeight;


function scrollAnimation() { 
    cards.forEach((card) => {
var cardTop = card.getBoundingClientRect().top;
if (cardTop < windowHeight - animationPoint){

card.classList.add('visible');
card.classList.remove('hidden');
};
});
}

scrollAnimation();

window.addEventListener('scroll',scrollAnimation);

// ===============
document.addEventListener('DOMContentLoaded', () => {
    // Define the target percentages for each progress bar
    const progressTargets = [95, 90, 85, 95]; // Example percentages

    // Function to animate the progress bars
    function animateProgressBar(element, targetPercentage) {
        const progressBar = element.querySelector('.progress-bar');
        const percentageText = element.querySelector('.percentage');

        let currentPercentage = 0;
        const interval = setInterval(() => {
            if (currentPercentage < targetPercentage) {
                currentPercentage++;
                progressBar.style.width = `${currentPercentage}%`;
                percentageText.textContent = `${currentPercentage}%`;
            } else {
                clearInterval(interval);
            }
        }, 10); // Adjust speed of animation by changing the interval
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const index = Array.from(skillBar.parentNode.children).indexOf(skillBar);
                animateProgressBar(skillBar, progressTargets[index]);
                skillBar.classList.add('visible');
                observer.unobserve(skillBar); // Stop observing after animation starts
            }
        });
    }, {
        threshold: 0.1 // Trigger animation when 10% of the skill-bar is visible
    });

    // Observe each skill bar
    document.querySelectorAll('.skill-bar').forEach(skillBar => {
        observer.observe(skillBar);
    });
});

// ================

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');

    function toggleButtons() {
        // Show buttons when scrolled more than 200px
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
            scrollToBottomBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
            scrollToBottomBtn.style.display = 'block'; // Keep bottom button always visible
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function scrollToBottom() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);
    scrollToBottomBtn.addEventListener('click', scrollToBottom);

    window.addEventListener('scroll', toggleButtons);
});
