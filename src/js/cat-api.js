
const ApiKey = "live_3CKy5yTuXrAzCmE7H7xrCVB77JtRAYCYWX8J4u5nAGZO565MKxw9oOx7YjZ5E4Cq";
const breedsUrl = "https://api.thecatapi.com/v1/breeds";

export function fetchBreeds() {
  return fetch(breedsUrl, {headers: {
      'x-api-key': ApiKey,
    }}).then((response) => {
    console.log(response)
    if (!response.ok) {
        return;
    }
    return response.json();
  });
};

const ImgUrl = "https://api.thecatapi.com/v1/images/search";

export function fetchCatByBreed(breedId) {
    return fetch(`${ImgUrl}?breed_ids=${breedId}`, {headers: {
      'x-api-key': ApiKey,
    }}).then((response) => {
        if (!response.ok) {
            return;
        }
        return response.json();
    });
};
