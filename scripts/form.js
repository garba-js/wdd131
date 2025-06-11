const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


document.addEventListener("DOMContentLoaded", () => {
  // Populate the product dropdown
  const selectElement = document.getElementById("pname");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });

  // Set current year in the footer
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // Set last modified date in the footer
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});


// for review
const reviewCountElem = document.getElementById("reviewCount");
if (reviewCountElem) {
  
  let count = localStorage.getItem("reviewCount");
  if (!count) {
    count = 0;
  }
  count = parseInt(count) + 1; 
  localStorage.setItem("reviewCount", count); 
  reviewCountElem.textContent = count; 
}

