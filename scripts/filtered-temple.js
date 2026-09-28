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
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Auckland New Zealand Temple",
    location: "Auckland New Zealand",
    dedicated: "2025, April, 13",
    area: 4223,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-56277-main.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake",
    dedicated: "1893, April, 6-24",
    area: 35508,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Ogden Utah Temple",
    location: "Ogden Utah",
    dedicated: "2014, September, 21",
    area: 10427,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-38445-main.jpg"
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
