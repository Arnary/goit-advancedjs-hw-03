import { fetchBreeds, fetchCatByBreed } from "./cat-api";


const breedSelect = document.querySelector(".breed-select");
const div = document.querySelector(".cat-info");
const errorMessage = document.querySelector(".error");
const loaderMessage = document.querySelector(".loader");
let storedBreeds = [];

loaderMessage.classList.remove("loader-hidden");

fetchBreeds().then((data) => {
      storedBreeds = data;
      loaderMessage.classList.add("loader-hidden")
      breedSelect.classList.remove("select-hidden");
   for (let i = 0; i < storedBreeds.length; i++) {
      const breed = storedBreeds[i];
      let option = document.createElement('option');
      
      option.value = `${breed.id}`;
      option.innerHTML = `${breed.name}`;
      document.querySelector('.breed-select').appendChild(option);
   
   };
}).catch(() => {
   breedSelect.classList.add("select-hidden");
   errorMessage.classList.remove("error-hidden");
});

breedSelect.addEventListener("change", handlerSelect);

function handlerSelect(event) {
   const breedId = event.target.value;
   div.innerHTML = "";
   loaderMessage.classList.remove("loader-hidden");
   errorMessage.classList.add("error-hidden")
   fetchCatByBreed(breedId).then((data) => {
      loaderMessage.classList.add("loader-hidden");
      div.innerHTML = createMarkup(data, breedId);
      
   }).catch(() => {
      div.classList.add("info-hidden");
      loaderMessage.classList.add("loader-hidden");
      errorMessage.classList.remove("error-hidden");
});
};

function createMarkup(arr, breedId) {
   const currentBreed = storedBreeds.find(breed => breed.id === breedId);
   let breedImg = {};
   for (const data of arr) {
      breedImg = data.url;
   }
   const markup = `<img src="${breedImg}" alt="${currentBreed.name}">
      <div><h>${currentBreed.name}</h>
      <p>${currentBreed.description}</p>
      <p><span class="temp">Temperament: </span>${currentBreed.temperament}</p></div>`;

   return markup;
};
