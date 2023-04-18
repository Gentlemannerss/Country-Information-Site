import axios from "axios";

const countryList = document.getElementById("countries")
async function fetchData() {
    const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flag,population,continents")
    console.log(response)

    /*      for (i = 0; i < response.data; i++) {}        */
    /*      response.map((country) => {})                 */
    countryList.innerHTML = `
    <li>Dit is de naam : ${response.data[0].name.common}</li>
    <img src="${response.data[0].flag}" alt="this is the flag of ${response.data[0].name.common}">
    <p>Has a population of ${response.data[0].population}</p>
        `

}

fetchData();

function fetchRegion() {}