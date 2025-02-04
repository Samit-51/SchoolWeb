const logo = document.querySelector(".logo");
const closeBtn = document.getElementById("close-btn");
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
    if (!popup.contains(e.target)) {
        popup.style.display = 'none';
    }
});

navBtnContainer.addEventListener("click", (e) => {
    const targetId = "slide" + e.target.id;
    const activeBtn = navBtnContainer.querySelector(".active");
    const targetBtn = document.getElementById(e.target.id);
    const targetSlde = document.getElementById(targetId);
    if (targetSlde) {
        targetSlde.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
    activeBtn.classList.remove("active");
    targetBtn.classList.add("active");
});