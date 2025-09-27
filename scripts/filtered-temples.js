// --------------------
// Temple Data
// --------------------
const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
  { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
  // Additional Temples
  { templeName: "Santo Domingo", location: "Santo Domingo, Dominican Republic", dedicated: "2002, April, 24", area: 17600, imageUrl: "images/santo_domingo_dominican_republic_temple_lds.jpeg" },
  { templeName: "Salt Lake Temple", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 253000, imageUrl: "images/salt_lake_temple_lds.jpeg" },
  { templeName: "San Juan", location: "San Juan, Puerto Rico", dedicated: "1983, August, 27", area: 16500, imageUrl: "images/san_juan_puerto_rico_temple_exterior.jpeg" }
];

// --------------------
// Dynamic Footer
// --------------------
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

// --------------------
// Card Creation Feature
// --------------------
const gallery = document.querySelector('.gallery');

function displayTemples(filteredTemples) {
    gallery.innerHTML = '';
    filteredTemples.forEach(temple => {
        const fig = document.createElement('figure');
        fig.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <strong>${temple.templeName}</strong><br>
                ${temple.location}<br>
                Dedicated: ${temple.dedicated}<br>
                Area: ${temple.area.toLocaleString()} sq ft
            </figcaption>
        `;
        gallery.appendChild(fig);
    });
}
// Initial display of all temples
displayTemples(temples);

// --------------------
// Filtering Feature
// --------------------
const navLinks = document.querySelectorAll('#main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const filter = link.dataset.filter;
        let filtered = temples;

        if (filter === 'old') {
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        } else if (filter === 'new') {
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        } else if (filter === 'large') {
            filtered = temples.filter(t => t.area > 90000);
        } else if (filter === 'small') {
            filtered = temples.filter(t => t.area < 10000);
        }
        displayTemples(filtered);
    });
});

// --------------------
// Hamburger menu
// --------------------
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    if (nav.style.display === "flex" || nav.style.display === "block") {
        nav.style.display = "none";
        menuToggle.textContent = "☰";
    } else {
        nav.style.display = "flex";
        menuToggle.textContent = "✖";
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.style.display = "flex";      
        menuToggle.textContent = "☰";    
    } else {
        nav.style.display = "none";      
        menuToggle.textContent = "☰";
    }
});
