const speed = document.querySelector('#speed');
const temp = document.querySelector('.temp');
const chill = document.querySelector('#chill');
const icon = document.querySelector('#weather-icon');
const description = document.querySelector("#description");

let windChill = 0;

// console.log(speed);
// console.log(temp);

const celsToFahr = temp * 9/5 + 32;
const kmphToMph = speed * 0.6214;
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Port+Elizabeth&units=metric&appid=43219341657d7557244efb66c3f4d2b9';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    temp.innerHTML = weatherData.main.temp.toFixed(0);
    speed.innerHTML = weatherData.wind.speed;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    description.textContent = desc;

    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);

    if (celsToFahr <= 50 && kmphToMph > 3.0) {
    windChill = 35.74 + 0.6215 * celsToFahr - 35.75 * Math.pow(kmphToMph, 0.16) + 0.4275 * celsToFahr * Math.pow(kmphToMph, 0.16);
    chill.innerHTML = `${windChill.toFixed(2)} °C`;
    } else { 
        windChill = 'N/A';
        chill.innerHTML = windChill;
    }
}
  
apiFetch();


