 /* -----    Mobile menu    -----*/

const navigationMenu = document.getElementById("navigation-menu")
const burgerMenu = document.getElementById("burger-menu")

burgerMenu.addEventListener("click", () => {
    navigationMenu.classList.toggle("active")
    burgerMenu.classList.toggle("burger-icon-active")
})