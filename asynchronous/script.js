'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const req = new XMLHttpRequest();
req.open('GEt', 'https://restcountries.com/v2/name/portugal');
req.send();

req.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText)
    console.log(data)
})