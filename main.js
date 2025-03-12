// ================= Header =======================

navbarLinks = document.querySelectorAll(".navbar__link")
navbarLinks.forEach(navbarLink => {
    navbarLink.addEventListener("mouseover", () => {
        navbarLink.classList.add("navbar__link--active")
    })
    navbarLink.addEventListener("mouseout", () => {
        navbarLink.classList.remove("navbar__link--active")
    })
});