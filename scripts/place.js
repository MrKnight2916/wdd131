// Footer dynamic year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Footer last modified date
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

// Wind chill calculation
function calculateWindChill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
        const windChill = 13.12 + 0.6215*tempC - 11.37*Math.pow(windKmh,0.16) + 0.3965*tempC*Math.pow(windKmh,0.16);
        return Math.round(windChill) + "°C";
    } else {
        return "N/A";
    }
}

// Display wind chill
const tempC = 28; // temperatura estática para República Dominicana
const windKmh = 15; // velocidad del viento estática
document.getElementById('wind-chill').textContent = calculateWindChill(tempC, windKmh);
