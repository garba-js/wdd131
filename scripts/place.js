// Populate runtime configuration dates inside footer elements
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Criterion 7: One-line logic block determining the correct metric wind chill index factor
const calculateWindChill = (t, v) => 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);

document.addEventListener("DOMContentLoaded", () => {
    const tempNode = document.getElementById("temperature");
    const windNode = document.getElementById("windspeed");
    const chillNode = document.getElementById("windchill");

    if (tempNode && windNode && chillNode) {
        const temperature = parseFloat(tempNode.textContent);
        const windSpeed = parseFloat(windNode.textContent);

        // Verification constraints check before executing calculation rule formula calls
        if (temperature <= 10 && windSpeed > 4.8) {
            const resultIndex = calculateWindChill(temperature, windSpeed);
            chillNode.textContent = `${resultIndex.toFixed(1)} °C`;
        } else {
            chillNode.textContent = "N/A";
        }
    }
});
