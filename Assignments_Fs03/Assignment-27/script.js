const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const age = document.getElementById('age').value;
const country = document.getElementById('country').value;
const city = document.getElementById('city').value;


function Localstore(){

const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const age = document.getElementById('age').value;
const country = document.getElementById('country').value;
const city = document.getElementById('city').value;

localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);
}

function remove(){
    localStorage.clear();
}