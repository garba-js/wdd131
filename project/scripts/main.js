document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Year
  const yearSpan = document.querySelector("#current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Last Modified Date with Fallback
  const modifiedSpan = document.querySelector("#last-modified");
  if (modifiedSpan) {
    modifiedSpan.textContent = document.lastModified || new Date().toLocaleString();
  }

  updateFavoritesCount();
});

// Helper function to fetch saved items count from localStorage
function updateFavoritesCount() {
  const savedSpan = document.querySelector("#saved-count");
  if (savedSpan) {
    const saved = JSON.parse(localStorage.getItem("pod_favorites")) || [];
    savedSpan.textContent = saved.length;
  }
}