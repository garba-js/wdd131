// ✅ Display Current Year in Footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// ✅ Display Last Modified Date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// ✅ Hamburger Menu Toggle
const menuButton = document.querySelector('#menu');
const navList = document.querySelector('.harmbuger');

if (menuButton && navList) {
    menuButton.addEventListener('click', (e) => {
        e.preventDefault();
        navList.classList.toggle('open');
    });
}

// ✅ Handle Form Submission & Save to localStorage (both forms supported)
const mForm = document.querySelector('.mform');
const cForm = document.querySelector('.cform');

[mForm, cForm].forEach((form) => {
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = form.fname.value.trim();
            const whatsapp = form.wnumber.value.trim();

            if (name === '' || whatsapp === '') {
                alert("Please fill in all fields.");
                return;
            }

            localStorage.setItem('userName', name);
            localStorage.setItem('whatsappNumber', whatsapp);

            alert(`Thanks, ${name}! We'll keep you updated on WhatsApp.`);

            form.reset();
        });
    }
});

// ✅ Example: Display Products Using Template Literals
const products = [
    {
        name: "Cookies",
        description: "Soft, buttery, and irresistible. Available in classic and special flavors."
    },
    {
        name: "Signature Cakes",
        description: "Perfect for birthdays, weddings & celebrations. Made with premium ingredients."
    },
    {
        name: "Cupcakes Deal",
        description: "Planning an event? Enjoy discounted prices on bulk cupcake orders."
    }
];

products.forEach(product => {
    console.log(`${product.name}: ${product.description}`);
});
