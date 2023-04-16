"use strict";

const search = document.querySelector(".search-tab");
const countrySec = document.querySelector(".country");
const countryfigure = document.getElementsByClassName("country-fig");
// const countryfigures = document.querySelectorAll(".country-fig");
const countryclick = document.querySelector(".country-img");
const contain = document.querySelector(".container");
const contains = document.querySelector(".containers");

//for the region
const dropDown = document.querySelector(".drop-down-list");

const countries = function () {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      data.forEach((every, arr, i) => {
        // console.log(every);

        const html = `
      
      <figure class="country-fig" id="con-fig" data-set='${
        every.name.common
      }' data='${every.region}'>
        <img class="country-img" src="${every.flags.png}"  />
        <div class='country-data'>
          <h2 class="details-header">${every.name.common}</h2>
          <ul class="ul-con">
            <li class="list-item">
              <strong>Population:</strong>
              <p class="details">${(every.population / 100000).toFixed(2)}M</p>
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
};
countries();

// const html = `

//         <img class="country-img" src="${data.flags.png}"  />
//         <div>
//           <h2></h2>
//           <ul>
//             <li>
//               <strong>Population:</strong>
//               <p>${data.population}</p>
//             </li>
//             <li>
//               <strong>Region:</strong>
//               <p>${data.region}</p>
//             </li>
//             <li>
//               <strong>Capital:</strong>
//               <p>${data.capital[0]}</p>
//             </li>
//           </ul>
//         </div>

// `;

// countrySec.insertAdjacentHTML("beforeend", html);

//searching for countries
search.addEventListener("keyup", function (input) {
  input = document.querySelector(".search-tab").value;
  // let countryfigure = document.getElementsByClassName(".country-fig");
  input = input.toLowerCase();
  // console.log(countryfigure);
  let datas = document.getElementsByClassName("details-header");
  // console.log(datas);
  for (let i = 0; i < datas.length; i++) {
    // console.log(datas[i].innerHTML);
    if (datas[i].innerHTML.toLowerCase().includes(input)) {
      datas[i].closest(".country-fig").style.display = "";
    } else {
      datas[i].closest(".country-fig").style.display = "none";
    }
  }
});

//get individual country Info
setTimeout(function () {
  let tar = document.getElementsByClassName("country-fig");
  let tars = document.querySelector("aside");
  let countryDisplay = document.querySelector(".country");
  // console.log([...tar]);
  for (let i = 0; i < tar.length; i++) {
    tar[i].addEventListener("click", function (event) {
      let parent = event.target.closest(".country-fig");
      let dataSetValue = parent.getAttribute("data-set");
      // console.log(parent);
      // console.log(dataSetValue);
      // contain.style.display = "none";
      contain.classList.add("display-none");

      fetch(`https://restcountries.com/v3.1/name/${dataSetValue}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          let outObj, inObj, innerValue, innerkey, key, lan;

          for ([outObj, inObj] of Object.entries(data[0].currencies)) {
            // for ([innerkey, innerValue] of Object.entries(inObj)) {
            //   console.log(`${innerValue}`);
            // }
          }

          for ([key, lan] of Object.entries(data[0].languages)) {
            // console.log(lan);
          }

          contains.classList.remove("display-none");
          const html2 = `

      <div class="sub-header">
        <button class="back-btn"><ion-icon class='icon-back' name="arrow-back-outline"></ion-icon></ion-icon>
          Back
                  </button>
      </div>
      
        <picture class="country-info">
      
          <img src="${
            data[0].coatOfArms.png == null
              ? `${data[0].flags.png}`
              : `${data[0].coatOfArms.png}`
          }" alt="countries" class="country-info-img" />

          <div class="head">
            <h1 class="heading">${data[0].name.official} ${data[0].flag}</h1>
            <div class="items">
              <ul class="list-groups">
                <li><strong>Native name:</strong> ${data[0].name.official}</li>
                <li><strong>Population:</strong> ${data[0].population.toLocaleString(
                  "en-US"
                )}</li>
                <li><strong>Region:</strong> ${data[0].region}</li>
                <li><strong>Sub Region:</strong> ${data[0].subregion}</li>
                <li><strong>Capital:</strong> ${data[0].capital[0]}</li>
              </ul>

              <ul class="list-groups">
                <li><strong>Top Level Domain:</strong> ${data[0].tld[0]}</li>
                <li><strong>Currencies:</strong> ${inObj.name} </li>
                
                <li><strong>Languages:</strong> ${lan}</li>
                
                
              </ul>
            </div>
          </div>
        </picture>
      
   
`;
          contains.insertAdjacentHTML("beforeend", html2);
          setTimeout(function () {
            const backButton = document.querySelector("button");
            backButton.addEventListener("click", function () {
              location.reload();
            });
          }, 100);
        });
      // countrySec.style.opacity = 0;
      // const newWindow = window.open("/second.html");

      // newWindow.addEventListener("load", function () {
      //   console.log(dataSetValue);
      //   const loadData = async function () {};
      // });
    });
  }

  // tar.addEventListener("click", function (e) {
  //   let data = e.target;
  //   console.log(data);
  // });
}, 100);

// let datas = document.getElementsByClassName("details-header");
// // console.log(datas);
// for (let i = 0; i < datas.length; i++) {
//   console.log(datas[i].innerHTML);
// }

//Filter by region
setTimeout(function () {
  dropDown.addEventListener("click", function (event) {
    let tar = document.getElementsByClassName("country-fig");

    // if (!event.target==tar.data)
    for (let i = 0; i < tar.length; i++) {
      const dataV = tar[i].getAttribute("data");
      // console.log(dataV);
      let dropDowMenu = event.target.innerHTML;
      // console.log(dropDowMenu);
      tar[i].style.display = "";
      if (dataV !== dropDowMenu) {
        tar[i].style.display = "none";
      }
    }

    //   console.log(dropDowMenu, every.region);
    // console.log(tar);
  });
}, 100);
