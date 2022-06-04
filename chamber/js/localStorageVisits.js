const visits = document.querySelector('#visits');

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    visits.textContent = `${numVisits} visits`;
} else {
    visits.textContent = 'This is your first visit!';
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);