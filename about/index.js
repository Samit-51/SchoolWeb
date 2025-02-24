let hamBurgerBtn = document.querySelector(".ham-burger-button.open");
let hamBurgerMenu = document.querySelector(".ham-burger-menu");
const logo = document.querySelector(".logo");
const hamburger = document.getElementById("hamburger");
const mainLinks = document.querySelector(".main-links");
const navBtnContainer = document.querySelector(".nav-btns");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        logo.classList.add("scrolled");
        updateNavPosition();
    } else {
        logo.classList.remove("scrolled");
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
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".secondary-links a");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            }
        });
    },
    { threshold: 0.6 }
);

sections.forEach((section) => observer.observe(section));

function updateNavPosition() {
    const header = document.querySelector("header");
    const nav = document.querySelector(".nav-links");

    if (header) {
        const headerHeight = header.offsetHeight;
        document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
    }
}

window.addEventListener("load", updateNavPosition);
window.addEventListener("resize", updateNavPosition);