document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById("review-counter");

    // Track review submission count in localStorage
    let reviewCount = Number(localStorage.getItem("reviewCounter")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCounter", reviewCount);

    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }

    // Dynamic Footer Content
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});