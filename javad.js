
const menuBtn = document.querySelector(".menu-btn"); 
const menu = document.querySelector(".mobile-menu");
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
});
