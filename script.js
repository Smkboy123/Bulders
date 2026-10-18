const menuButton = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    const menuIsOpen = navLinks.classList.toggle("showmenu");
    menuButton.setAttribute("aria-expanded", menuIsOpen);
});