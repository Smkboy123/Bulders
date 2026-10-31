const menuButton = document.querySelector(".bouton-menu");
const navLinks = document.querySelector(".nav");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const menuIsOpen = navLinks.classList.toggle("showmenu");
        menuButton.setAttribute("aria-expanded", String(menuIsOpen));
        menuButton.setAttribute("aria-label", menuIsOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            navLinks.classList.remove("showmenu");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Ouvrir le menu");
        }
    });
}