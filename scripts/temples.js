// Footer dynamic year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Footer last modified date
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

// Hamburger menu toggle
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

// Ajustar menú al cambiar tamaño de pantalla
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.style.display = "flex";      // mostrar siempre en pantallas grandes
        menuToggle.textContent = "☰";    // reset icon
    } else {
        nav.style.display = "none";       // ocultar en móviles
        menuToggle.textContent = "☰";
    }
});
