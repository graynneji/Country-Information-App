"use strict";

const search = document.querySelector(".search-tab");
const countrySec = document.querySelector(".country");
const countryfigure = document.getElementsByClassName("country-fig");

class App {
  constructor() {
    super.countries();
  }
}

class Countries extends App {
  constructor() {}
  countries() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((every, i) => {
          const html = `
            <figure class="country-fig">
              <img class="country-img" src="${every.flags.png}"  />
              <div class='country-data'>
                <h2 class="details-header">${every.name.common}</h2>
                <ul class="ul-con">
                  <li class="list-item">
                    <strong>Population:</strong>
                    <p class="details">${(every.population / 100000).toFixed(
                      2
                    )}M</p>
                  </li>
                  <li class="list-item">
                    <strong>Region:</strong>
                    <p class="details">${every.region}</p>
                  </li>
                  <li class="list-item">
                    <strong>Capital:</strong>
                    <p class="details">${
                      every.capital == undefined ? "None" : every.capital
                    }</p>
                  </li>
                  <li class="list-item">
                    <strong>Timezones:</strong>
                    <p class="details">${every.timezones[0]}</p>
                  </li>
                  
                </ul>
              </div>
              </figure>
       
      `;
          countrySec.insertAdjacentHTML("beforeend", html);
        });
      });

    return this;
  }
}

class Country extends App {
  constructor() {}
}

class Region extends App {
  constructor() {}
}

const con = new App();
