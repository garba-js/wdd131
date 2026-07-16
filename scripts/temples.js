document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Footer Date Calculations
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }

    // 2. Responsive Hamburger Navigation Logic
    const menuButton = document.getElementById("menuButton");
    const navigationElement = document.querySelector("nav");

    if (menuButton && navigationElement) {
        menuButton.addEventListener("click", () => {
            navigationElement.classList.toggle("show");
            menuButton.classList.toggle("open");
        });
    }
});
