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
      if (data.length === 0) {
         loaderMessage.classList.add("loader-hidden");
         div.innerHTML = "<p class = no-info>Unfortunately, we have no information about this cat.</p>";
         return;
      }
      loaderMessage.classList.add("loader-hidden");
      div.innerHTML = createMarkup(data);
   }).catch(() => {
      div.classList.add("info-hidden");
      loaderMessage.classList.add("loader-hidden");
      errorMessage.classList.remove("error-hidden");
});
};

function createMarkup(arr) {
   let breedImg;
   let breedName;
   let breedDescription;
   let breedTemperament;
   for (const data of arr) {
      breedImg = data.url;
      for (const breed of data.breeds) {
         breedName = breed.name;
         breedDescription = breed.description;
         breedTemperament = breed.temperament;
      }
   }
   const markup = `<img src="${breedImg}" alt="${breedName}">
      <div><h>${breedName}</h>
      <p>${breedDescription}</p>
      <p><span class="temp">Temperament: </span>${breedTemperament}</p></div>`;

   return markup;
};
