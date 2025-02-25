const closeBtn = document.getElementById("close-btn");
const popup = document.querySelector('.popup');

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';

});


window.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !e.target.matches('.popup')) {
        popup.style.display = 'none';
    }
});

// Image slider part

const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.nav-btn');
const slider = document.querySelector('.slider');
let index = 0;
const navBtnContainer = document.querySelector(".nav-btns");
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

function resetTimer() {
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

const principalMessage = document.getElementById('principal-message');
const chairmanMessage = document.getElementById('chairman-message');
const showPrincipalBtn = document.getElementById('show-principal');
const showChairmanBtn = document.getElementById('show-chairman');

// Function to handle smooth transitions
function switchMessages(showElement, hideElement) {
    // First fade out the current element
    hideElement.classList.add('fade-out');
    hideElement.classList.remove('fade-in');

    // After the fade-out animation completes, hide it and show the new element
    setTimeout(() => {
        hideElement.style.display = 'none';
        showElement.style.display = 'flex';

        // Trigger reflow to ensure the transition works
        void showElement.offsetWidth;

        // Add the fade-in class to the new element
        showElement.classList.add('fade-in');
        showElement.classList.remove('fade-out');
    }, 500); // Match this timing with your CSS transition duration
}

showPrincipalBtn.addEventListener('click', function () {
    if (principalMessage.style.display === 'none') {
        switchMessages(principalMessage, chairmanMessage);
        showPrincipalBtn.classList.add('active');
        showChairmanBtn.classList.remove('active');
    }
});

showChairmanBtn.addEventListener('click', function () {
    if (chairmanMessage.style.display === 'none') {
        switchMessages(chairmanMessage, principalMessage);
        showPrincipalBtn.classList.remove('active');
        showChairmanBtn.classList.add('active');
    }
});