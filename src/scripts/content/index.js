const restaurantContents = document.querySelector(".content__restaurants");

const { restaurants: $restaurants } = require("../../DATA.json");

let restaurants = ``;

for (const { id, name, description, pictureId, city, rating } of $restaurants) {
  const $rating = Math.floor(parseInt(rating));
  const voidRating = 5 - $rating;

  let filledRating = ``;

  for (let i = 0; i < $rating; i++) {
    filledRating += `<span class="fa fa-star extras__rating_checked"></span>`;
  }

  let $voidRating = ``;
  for (let i = 0; i < voidRating; i++) {
    $voidRating += `<span class="fa fa-star"></span>`;
  }

  const shortenDesc = description.slice(0, 190);

  restaurants += `<div class="restaurants__card">
    <a href="#">
      <div class="card__thumbnail">
        <img src="${pictureId}" alt="${name} - ${city}" />
        <p class="thumbnail__location">${city}</p>
      </div>
      <div class="card__detail">
        <div class="detail__extras">
          <p class="extras__rating">${filledRating}${$voidRating}</p>
        </div>
        <h2 class="detail__title">${name}</h2>
        <p class="detail__desc">${shortenDesc}..</p>
      </div>
    </a>
  </div>`;
}

restaurantContents.innerHTML = restaurants;
