import axios from 'axios';

const BASE_URL = 'https://drinkify-backend.p.goit.global/API/V1/cocktails';
const refs = {
  cocktailList: document.querySelector('.cocktail-list'),
};
async function getCocktails() {
  const res = await axios.get(`${BASE_URL}?r=8`);

  const arrCocktails = await Promise.all(
    res.data.map(async cocktail => {
      const response = await axios.get(`${BASE_URL}/lookup/`, {
        params: { id: cocktail._id },
      });
      return response.data;
    })
  );
  const markup = arrCocktails.flat().map(createMarkup).join('');
  refs.cocktailList.insertAdjacentHTML('beforeend', markup);
}

getCocktails();

function createMarkup({ drinkThumb, description, drink, _id }) {
  return `<li class="cocktail-item dynamic-box">
          <img
            class="card-image img "
            src="${drinkThumb}"
            alt="${drink}"
          />
        <div class="text-box dynamic-element">
          <h2 class="cocktail-name dynamic-element">${drink}</h2>
          <p class="cocktail-descr dynamic-element">${description}</p>
          <div class="btn-box dynamic-element">
            <button type="button" class="card-btn btn js-btn-learn-more dynamic-element" data-id="${_id}">
              learn more
            </button>
            <button type="button" class="btn-favorite btn js-btn-favorite dynamic-element" data-id="${_id}">
              <svg class="card-icon">
                <use href="./public/sprite.svg#heart"></use>
              </svg>
            </button>`;
}
