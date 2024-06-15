import axios from "axios";


axios.defaults.headers.common["x-api-key"] = "live_3CKy5yTuXrAzCmE7H7xrCVB77JtRAYCYWX8J4u5nAGZO565MKxw9oOx7YjZ5E4Cq";
const breedsUrl = "https://api.thecatapi.com/v1/breeds";

export function fetchBreeds() {
  return fetch(breedsUrl).then((response) => {
    if (!response.ok) {
        return;
    }
    return response.json();
  });
};

const ImgUrl = "https://api.thecatapi.com/v1/images/search";

export function fetchCatByBreed(breedId) {
    return fetch(`${ImgUrl}?breed_ids=${breedId}`).then((response) => {
        if (!response.ok) {
            return;
        }
        return response.json();
    });
};
