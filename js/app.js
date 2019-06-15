// const giphy = {
//    api: 'https://api.giphy.com/v1/gifs/search?',
//    apiKey: '&api_key=t1WyOpFfske7f7bnMBsZwgCNB7iVJvJi',
//    search: `&q=${inputSearch}`
// }

const returnedImgEle = document.querySelector(".page__image");
const form = document.querySelector(".page__form");

form.addEventListener("submit", e => {
  e.preventDefault();
  form.reset();
});
