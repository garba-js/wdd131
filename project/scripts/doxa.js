// ✅ Display Current Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// ✅ Hamburger Menu Toggle
const mainnav = document.querySelector('.harmbuger');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// ✅ FORM Handling (Subscription Form & Contact Form)
const subscriptionForm = document.querySelector('.mform');
const contactForm = document.querySelector('.cform');

if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = subscriptionForm.fname.value.trim();
        const number = subscriptionForm.wnumber.value.trim();

        if (name && number) {
            localStorage.setItem('subscription', JSON.stringify({ name, number }));
            alert(`Thank you, ${name}, for following Doxa!`);
            subscriptionForm.reset();
        } else {
            alert('Please fill out both fields to subscribe.');
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.fname.value.trim();
        const number = contactForm.wnumber.value.trim();
        const review = contactForm.review.value.trim();

        if (name && number && review) {
            localStorage.setItem('contactMessage', JSON.stringify({ name, number, review }));
            alert(`Thanks, ${name}! Your message has been received.`);
            contactForm.reset();
        } else {
            alert('Please complete all fields before sending your message.');
        }
    });
}

// ✅ Dynamic Product Rendering on product.html
const products = [
    { name: "Cookies", price: 500, description: "Soft, buttery, irresistible.", img: "images/cookie.webp" },
    { name: "Signature Cake", price: 10500, description: "1 Bento 2 Cupcake", img: "images/signature_cake.webp" },
    { name: "Fondant Cake", price: 48999, description: "3 layer size 8", img: "images/product1.webp" },
    { name: "Plain Cake", price: 9900, description: "1 layer size 8", img: "images/product2.webp" },
    { name: "Butter Cream Cake", price: 12900, description: "1 layer size 6", img: "images/product3.webp" },
    { name: "Whipped Cream Cake", price: 20900, description: "2 layer size 6", img: "images/product4.webp" },
    { name: "Whipped Cream Large", price: 35500, description: "2 layer size 8", img: "images/product5.webp" },
    { name: "Butter Cream Mini", price: 10000, description: "2 layer size 4", img: "images/product6.webp" },
    { name: "Bento Cake Premium", price: 6700, description: "1 layer size 4", img: "images/product7.webp" },
    { name: "Bento Cake Plain", price: 5000, description: "Plain size 4", img: "images/product8.webp" },
    { name: "Cupcakes Deal", price: 2500, description: "Per Box", img: "images/cupcake.webp" }
];

const productContainer = document.querySelector('.highlight');

if (productContainer && window.location.href.includes("product.html")) {
    displayProducts(products);
}

function displayProducts(productArray) {
    productContainer.innerHTML = `
        <div class="hheading">
            <h3>Your Next Favourite Cake is Here</h3>
            <p>Explore our bestselling products. Affordable, delicious, made with love.</p>
        </div>
    `;

    productArray.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" loading="lazy">
            <div class="description">
                <h3>${product.name}</h3>
                <p>Price: ₦${product.price.toLocaleString()}</p>
                <p>${product.description}</p>
            </div>
        `;
        productContainer.appendChild(card);
    });
}
