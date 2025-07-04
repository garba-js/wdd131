
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;


const mainnav = document.querySelector('.harmbuger')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

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
	// Add more temple objects here...
	{
	  templeName: "Accra Ghana Temple",
	  location: "Accra, Ghana",
	  dedicated: "2004, January, 11",
	  area: 1626,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
	},
	{
	  templeName: "Monterrey Mexico Temple",
	  location: "Monterrey, Nuevo Leon Mexico",
	  dedicated: "2002, April, 28",
	  area: 1533,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-1068-main.jpg"
	},
	
  ];

  function renderTemples(templesArray) {
  const container = document.getElementById('templeContainer');
  container.innerHTML = '';

  templesArray.forEach(temple => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Total Area: ${temple.area.toLocaleString()} sq ft</p>
    `;

    container.appendChild(card);
  });
}

const oldTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
const newTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
const largeTemples = temples.filter(t => t.area > 90000);
const smallTemples = temples.filter(t => t.area < 10000);

document.querySelector("nav").addEventListener("click", (e) => {
  if (!e.target.matches("a")) return; 
  e.preventDefault(); 

  switch (e.target.id) {
    case "old":
      renderTemples(oldTemples);
      break;
    case "new":
      renderTemples(newTemples);
      break;
    case "large":
      renderTemples(largeTemples);
      break;
    case "small":
      renderTemples(smallTemples);
      break;
    case "home":
    default:
      renderTemples(temples);
      break;
  }
});
