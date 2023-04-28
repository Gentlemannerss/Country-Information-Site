import axios from "axios";

const resultBox = document.getElementById("resultBox");
const inputField = document.getElementById("inputField");

async function fetchCountry(country) {
    try {
        const response = await axios.get("https://restcountries.com/v2/all?fields=name,flags,population,capital,subregion,currencies");
        const countries = response.data;
        const {name, flags: {svg: flag}, capital, currencies, subregion, population} = countries[country];
        const curr = currencies.map((currency) => currency.name);
        resultBox.innerHTML =
            `
<img src="${flag}" alt="this is the flag of ${name}"/>
<h3>${name}</h3>
<p>${name} is situated in ${subregion}. It has a population of ${population} people.
The capital is ${capital} and you can pay with ${curr}</p>
`
        console.log(countries);
    } catch (e) {
        console.error(e)
    }
}

const searchButton = document.querySelector('.search-box button');

searchButton.addEventListener('click', async (event) => {
    event.preventDefault(); // prevent form submission
    const searchValue = inputField.value;
    console.log(searchValue); // log search value to console
    try {
        await fetchCountry(searchValue);
    } catch (e) {
        console.error(e);
    }
});

/* Option 1:

const searchButton = document.querySelector(".search-box button");

searchButton.addEventListener("click", (event) => {
    event.preventDefault(); // prevent form submission
    const searchValue = inputField.value;
    console.log(searchValue); // log search value to console
    fetchCounty(searchValue); // call fetchCountry function with searchValue
});*/


// PseudoCode

// button maken voor het input field, en hier de event listner aan hangen
// event listner maken die functie fetchcountry uitvoert! Hiermee vuur je de functie af.
// maak een functie die de currency's opvangt en deze terug geeft als String
// maak een fucntie die de talen opvangt en deze terug geeft als String

