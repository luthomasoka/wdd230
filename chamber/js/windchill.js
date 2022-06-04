const speed = document.querySelector('#speed').textContent;
const temp = document.querySelector('.temp').textContent;
let windChill = 0;

// console.log(speed);
// console.log(temp);

const celsToFahr = temp * 9/5 + 32;
const kmphToMph = speed * 0.6214;

if (celsToFahr <= 50 && kmphToMph > 3.0) {
    windChill = 35.74 + 0.6215 * celsToFahr - 35.75 * Math.pow(kmphToMph, 0.16) + 0.4275 * celsToFahr * Math.pow(kmphToMph, 0.16);
    //Conversion to Celsius
    windChill = (windChill - 32) * 5/9;
    document.querySelector('#chill').innerHTML = `${windChill.toFixed(2)} °C`;

} else { 
    windChill = 'N/A';
    document.querySelector('#chill').innerHTML = windChill;
}
