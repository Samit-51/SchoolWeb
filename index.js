let hamBurgerBtn = document.querySelector(".ham-burger-button.open");
let hamBurgerMenu = document.querySelector(".ham-burger-menu");
const logo = document.querySelector(".logo");
const closeBtn = document.getElementById("close-btn");
const hamburger = document.getElementById("hamburger");
const mainLinks = document.querySelector(".main-links");
const navBtnContainer = document.querySelector(".nav-btns");
const popup = document.querySelector('.popup');


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
    if (!popup.contains(e.target) && !e.target.matches('.popup')) {
        popup.style.display = 'none';
    }
});


navBtnContainer.addEventListener("click", (e) => {
    if (!e.target.closest('button')) return;
    const targetId = "slide" + e.target.id;
    const activeBtn = navBtnContainer.querySelector(".active");
    const targetBtn = document.getElementById(e.target.id);
    const targetSlide = document.getElementById(targetId);
    if (targetSlide) {
        targetSlide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
    activeBtn.classList.remove("active");
    targetBtn.classList.add("active");
});


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
    if(hamBurgerMenu.classList.contains('active')){
        hideHamBurger();
    }
});

function hideHamBurger(){
    hamBurgerMenu.classList.remove("active");
}