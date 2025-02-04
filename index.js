const logo = document.querySelector(".logo");
const closeBtn = document.getElementById("close-btn");
const popup = document.querySelector('.popup');
const navLinks = document.querySelectorAll('.nav-links');

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        logo.classList.add("scrolled");
    } else {
        logo.classList.remove("scrolled");
    }
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (!popup.contains(e.target)) { 
        popup.style.display = 'none';
    }
});


navLinks.forEach(link => {
    link.addEventListener('click', (e)=>{
        const activeDot = document.querySelector('.slider-btns .active');
        const targetDot = e.target;
        activeDot.classList.remove('active');
        targetDot.classList.add('active');
    });
});