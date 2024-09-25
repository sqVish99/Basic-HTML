document.getElementById("menu-toggle").addEventListener("click", function() {
    const sideMenu = document.getElementById("side-menu");
    const mainContent = document.querySelector("main");

    if (sideMenu.classList.contains("open")) {
        sideMenu.classList.remove("open");
        mainContent.classList.remove("shift");
    } else {
        sideMenu.classList.add("open");
        mainContent.classList.add("shift");
    }
});


document.addEventListener("click", function(event) {
    const sideMenu = document.getElementById("side-menu");
    const mainContent = document.querySelector("main");
    const menuToggle = document.getElementById("menu-toggle");

    if (sideMenu.classList.contains("open") && !sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove("open");
        mainContent.classList.remove("shift");
    }
});