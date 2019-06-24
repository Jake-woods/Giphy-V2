// UI selectors
const returnedImgEle = document.querySelector(".page__image");
const form = document.querySelector(".page__form");

// Functionality
form.addEventListener("submit", e => {
  const formInput = document.querySelector(".page__form-query").value;
  const giphySetup = {
    api: "https://api.giphy.com/v1/gifs/search?",
    apiKey: "&api_key=t1WyOpFfske7f7bnMBsZwgCNB7iVJvJi",
    search: `&q=${formInput}`
  };
  const giphyUrl = giphySetup.api + giphySetup.apiKey + giphySetup.search;

  fetch(giphyUrl)
    .then(resp => resp.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.data.length);

      returnedImgEle.setAttribute(
        "src",
        data.data[randomIndex].images.original.url
      );
    });

  e.preventDefault();
  form.reset();
});
