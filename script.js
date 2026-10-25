const menuButton = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    const menuIsOpen = navLinks.classList.toggle("showmenu");
    menuButton.setAttribute("aria-expanded", menuIsOpen);
    menuButton.setAttribute("aria-label", menuIsOpen ? "Fermer le menu" : "Ouvrir le menu");
});

navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove("showmenu");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");
    }
});