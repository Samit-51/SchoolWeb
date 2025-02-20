let hamBurgerBtn = document.querySelector(".ham-burger-button.open");
let hamBurgerMenu = document.querySelector(".ham-burger-menu");
const logo = document.querySelector(".logo");
const closeBtn = document.getElementById("close-btn");
const hamburger = document.getElementById("hamburger");
const mainLinks = document.querySelector(".main-links");
const navBtnContainer = document.querySelector(".nav-btns");
const popup = document.querySelector('.popup');


window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        logo.classList.add("scrolled");
    } else {
        logo.classList.remove("scrolled");
    }
});


closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';

});


window.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !e.target.matches('.popup')) {
        popup.style.display = 'none';
    }
});


if (hamBurgerBtn) {
    hamBurgerBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        hamBurgerMenu.classList.toggle("active");
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 520) {
            hideHamBurger();
        }
    });

    window.addEventListener('click', () => {
        if (hamBurgerMenu.classList.contains('active')) {
            hideHamBurger();
        }
    });

    function hideHamBurger() {
        hamBurgerMenu.classList.remove("active");
    }
}

// Image slider part

const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.nav-btn');
const slider = document.querySelector('.slider'); 
let index = 0;
let autoSlideInterval;

function showSlide() {
    let slideWidth = window.innerWidth;
    slider.scrollLeft = index * slideWidth;
    updateNavButtons();
}


function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide();
    resetTimer();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
    resetTimer();
}

function goToSlide(slideIndex) {
    index = slideIndex;
    showSlide();
    resetTimer();
}

function resetTimer(){
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}
// Update active button
function updateNavButtons() {
    navButtons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

// Event Listeners
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

navButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => goToSlide(i));
});

// Keyboard Navigation (Left & Right Arrows)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Touch Swipe Support (for Mobile)
let touchStartX = 0;

document.querySelector('.slider').addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

document.querySelector('.slider').addEventListener('touchend', (e) => {
    let touchEndX = e.changedTouches[0].clientX;
    let diff = touchStartX - touchEndX;

    if (diff > 50) nextSlide(); // Swipe left → Next
    else if (diff < -50) prevSlide(); // Swipe right → Previous
});

// Start auto-slide
autoSlideInterval = setInterval(nextSlide, 5000);

