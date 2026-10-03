document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById("review-counter");

    let reviewCount = Number(localStorage.getItem("reviewCounter")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCounter", reviewCount);

    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});