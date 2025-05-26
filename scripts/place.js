document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
  const temperatureC = 9; 
  const windSpeedKmH = 13;

  const tempElement = document.querySelector('#temp');
  const chillElement = document.querySelector('#chill');

  tempElement.textContent = `${temperatureC}°C`;

  function calculateWindChill(tempC, windKmH) {
      const windPower = Math.pow(windKmH, 0.16);
      const chill = 13.12 + (0.6215 * tempC) - (11.37 * windPower) + (0.3965 * tempC * windPower);
      return chill.toFixed(1);
  }

  if (temperatureC <= 10 && windSpeedKmH > 4.8) {
      const windChill = calculateWindChill(temperatureC, windSpeedKmH);
      chillElement.textContent = `${windChill}°C`;
  } else {
      chillElement.textContent = 'N/A';
  }

});


