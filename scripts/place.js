document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 + 0.6215 * tempF - 35.75 * speedMph ** 0.16 + 0.4275 * tempF * speedMph ** 0.16
  ).toFixed(1);
}

const temp = parseFloat(document.getElementById('temp').textContent);
const speed = parseFloat(document.getElementById('speed').textContent);
const chillDisplay = document.getElementById('chill');

if (temp <= 50 && speed > 3) {
  chillDisplay.textContent = calculateWindChill(temp, speed) + " °F";
} else {
  chillDisplay.textContent = "N/A";
}


