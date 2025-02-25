const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".secondary-links a");
const logo = document.querySelector(".logo");

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

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        logo.classList.add("scrolled");
        updateNavPosition();
    } else {
        logo.classList.remove("scrolled");
    }
});

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