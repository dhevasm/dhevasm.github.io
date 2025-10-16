document.addEventListener("DOMContentLoaded", function(event) {
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById("year-now").innerHTML = year;

    const navbar = document.getElementById("navbar-menu");
    window.onscroll = function() {
        const scrollPosition = window.scrollY;
        const navbarPosition = navbar.offsetTop;
        if (scrollPosition > navbarPosition) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    }
});