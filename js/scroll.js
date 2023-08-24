document.addEventListener("scroll", () => {
    let nav = document.getElementById("nav");
    if (window.scrollY > 0) {
        nav.classList.add("navbar-background-scroll");
    }
    else {
        nav.classList.remove("navbar-background-scroll");
    }
});