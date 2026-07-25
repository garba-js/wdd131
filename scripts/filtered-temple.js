// Footer Copyright Year & Last Modified Fields
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Mobile Navigation Trigger using your CSS '.show' flag
const menuButton = document.getElementById("menuButton");
const navMenu = document.querySelector("nav");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        menuButton.classList.toggle("open");
    });
}

// Array of Temple Objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://churchofjesuschrist.org"
  },
  // 3 Additional Temples
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Frankfurt Germany",
    location: "Friedrichsdorf, Germany",
    dedicated: "1987, August, 28",
    area: 32895,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://churchofjesuschrist.org"
  }
];

// Document target containers
const galleryContainer = document.getElementById("galleryContainer");
const galleryTitle = document.getElementById("gallery-title");

// Render dynamic cards function
function displayTemples(filteredTemples) {
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = "";
    
    filteredTemples.forEach(temple => {
        const card = document.createElement("figure");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
        `;
        galleryContainer.appendChild(card);
    });
}

// Function to pull out numeric year value from dedicated property
function getYear(dateString) {
    return parseInt(dateString.split(",")[0].trim());
}

// Map interactions & filtering to navigation list entries
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Toggle highlight menu states
        document.querySelectorAll("nav a").forEach(item => item.classList.remove("active"));
        link.classList.add("active");

        const targetFilter = link.textContent.trim().toLowerCase();
        
        // Update main header title dynamically
        if (galleryTitle) {
            galleryTitle.textContent = link.textContent;
        }

        let outputList = [];

        switch (targetFilter) {
            case "old":
                outputList = temples.filter(t => getYear(t.dedicated) < 1900);
                break;
            case "new":
                outputList = temples.filter(t => getYear(t.dedicated) > 2000);
                break;
            case "large":
                outputList = temples.filter(t => t.area > 90000);
                break;
            case "small":
                outputList = temples.filter(t => t.area < 10000);
                break;
            default: // Handles "Home" view
                outputList = temples;
                break;
        }
        
        displayTemples(outputList);
        
        // Auto collapse mobile nav menu panel upon clicking an entry selection
        if (navMenu.classList.contains("show")) {
            navMenu.classList.remove("show");
            menuButton.classList.remove("open");
        }
    });
});

// Run layout initialization instantly
displayTemples(temples);
