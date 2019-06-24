// UI selectors
const returnedImgEle = document.querySelector(".page__image");
const form = document.querySelector(".page__form");
const historyUl = document.querySelector(".gif-history__list");
const historyEle = document.querySelector(".gif-history");
const historyEleClose = document.querySelector(".gif-history__close");
const historyEleOpen = document.querySelector(".gif-history__open");

// Helper
const createImgEle = src => {
  const li = document.createElement("li");
  const img = document.createElement("img");

  li.classList.add("gif-history__item");
  img.classList.add("gif-history__image");

  img.setAttribute("src", src);

  li.appendChild(img);
  historyUl.appendChild(li);
};

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

      createImgEle(data.data[randomIndex].images.original.url);
    });

  e.preventDefault();
  form.reset();
});

// Toggle gif history visibility
historyEleOpen.addEventListener("click", () => {
  historyEle.classList.add("gif-history--visible");
});

historyEleClose.addEventListener("click", () => {
  historyEle.classList.remove("gif-history--visible");
});
