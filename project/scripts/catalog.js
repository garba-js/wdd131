document.addEventListener("DOMContentLoaded", () => {
  const catalogGrid = document.querySelector("#catalog-grid");
  const categoryFilter = document.querySelector("#category-filter");
  const availabilityFilter = document.querySelector("#availability-filter");

  if (!catalogGrid) return;

  // Render function utilizing EXCLUSIVELY Template Literals
  function renderCatalog(itemsToDisplay) {
    catalogGrid.innerHTML = "";

    if (itemsToDisplay.length === 0) {
      catalogGrid.innerHTML = `<p class="no-results">No items found matching your filter selection.</p>`;
      return;
    }

    const htmlMarkup = itemsToDisplay.map(item => `
      <article class="produce-card">
        <img src="${item.image}" alt="${item.name}" loading="lazy" width="400" height="180">
        <h3>${item.name}</h3>
        <p><strong>Category:</strong> ${item.category.toUpperCase()}</p>
        <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
        <p>${item.description}</p>
        <span class="badge ${item.inStock ? 'highlight' : 'out-stock'}">
          ${item.inStock ? 'Available Now' : 'Out of Stock'}
        </span>
        <button class="cta-button" onclick="toggleBookmark(${item.id})">
          Bookmark Item
        </button>
      </article>
    `).join("");

    catalogGrid.innerHTML = htmlMarkup;
  }

  // Conditional Branching & Array Filtering Logic
  function filterCatalogData() {
    const selectedCategory = categoryFilter.value;
    const selectedAvailability = availabilityFilter.value;

    const filteredItems = produceItems.filter(item => {
      const matchesCategory = (selectedCategory === "all") || (item.category === selectedCategory);
      const matchesAvailability = (selectedAvailability === "all") || (selectedAvailability === "in-stock" ? item.inStock : true);
      
      return matchesCategory && matchesAvailability;
    });

    renderCatalog(filteredItems);
  }

  // Event Listeners for Filter Dropdowns
  categoryFilter.addEventListener("change", filterCatalogData);
  availabilityFilter.addEventListener("change", filterCatalogData);

  // Initial Render on Page Load
  renderCatalog(produceItems);
  updateSavedCountDisplay();
});

// LocalStorage Integration Requirement
function toggleBookmark(itemId) {
  let savedFavorites = JSON.parse(localStorage.getItem("pod_favorites")) || [];

  if (!savedFavorites.includes(itemId)) {
    savedFavorites.push(itemId);
    localStorage.setItem("pod_favorites", JSON.stringify(savedFavorites));
    alert("Item added to your saved bookmarks!");
  } else {
    savedFavorites = savedFavorites.filter(id => id !== itemId);
    localStorage.setItem("pod_favorites", JSON.stringify(savedFavorites));
    alert("Item removed from your saved bookmarks.");
  }

  updateSavedCountDisplay();
}

// Helper to update counter on catalog page
function updateSavedCountDisplay() {
  const savedCountSpan = document.querySelector("#saved-count");
  if (savedCountSpan) {
    const savedFavorites = JSON.parse(localStorage.getItem("pod_favorites")) || [];
    savedCountSpan.textContent = savedFavorites.length;
  }
}