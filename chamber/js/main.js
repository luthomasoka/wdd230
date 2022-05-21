const displayBannerMsg = () => {
    let currentDate = new Date().getDay();
    let msg = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

    if (currentDate == 1 || currentDate == 2) {
        document.querySelector('.banner-msg p').innerHTML = msg;
    } else {
        document.querySelector('.banner-msg p').style.display = "none";
    }
}

const weekday = displayBannerMsg();
const todaysDate = new Date(document.lastModified);
const dateField = document.querySelector('#dateTime');
const date = new Date();
const year = todaysDate.getFullYear();
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

const fullDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(date);

dateField.innerHTML = `<em>${fullDate}</em>`;
document.querySelector("#year").innerHTML = year;
document.getElementById("currentdate").innerHTML = todaysDate.toLocaleString('en-GB');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

displayBannerMsg();