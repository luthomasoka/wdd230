const todaysDate = new Date(document.lastModified);
const dateField = document.querySelector('#dateTime');
const date = todaysDate.getFullYear();
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

const fullDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(todaysDate);

dateField.innerHTML = `<em>${fullDate}</em>`;
document.querySelector("#year").innerHTML = date;
document.getElementById("currentdate").innerHTML = todaysDate.toLocaleString('en-GB');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
