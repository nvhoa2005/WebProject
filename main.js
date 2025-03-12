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

// ==================== Hero ========================
subDots = document.querySelectorAll(".hero__content--subDot svg")
subDots.forEach(subDot => {
    subDot.addEventListener("mouseover", () => {
        subDot.classList.add("hero__content--subDot-active")
    })
    subDot.addEventListener("mouseout", () => {
        subDot.classList.remove("hero__content--subDot-active")
    })
});