import { CONFIG, IMAGE_RESOLUTION } from '../../../globals/config';

class DetailRestaurant extends HTMLElement {
  #pictureId;

  #name;

  #address;

  #city;

  #rating;

  #desc;

  #menuFoods;

  #menuDrinks;

  #customerReviews;

  set restaurant({
    id,
    pictureId,
    name,
    city,
    address,
    rating,
    description,
    menus,
    customerReviews,
  }) {
    this.#pictureId = pictureId;
    this.#name = name;
    this.#city = city;
    this.#address = address;
    this.#rating = rating;
    this.#desc = description;
    this.#menuFoods = menus?.foods;
    this.#menuDrinks = menus?.drinks;
    this.#customerReviews = customerReviews;

    this.render();
  }

  render() {
    const rating = document.createElement('x-rating');
    rating.rating = { rating: this.#rating };

    const like = document.createElement('x-like');
    like.state = false;

    const $foodMenus = this.#menuFoods.map(({ name }) => `<li>${name}</li>`);
    const foodMenus = $foodMenus.join('');

    const $drinkMenus = this.#menuDrinks.map(({ name }) => `<li>${name}</li>`);
    const drinkMenus = $drinkMenus.join('');

    const $customerReviews = this.#customerReviews.map((review) => {
      const { name, date, review: msg } = review;
      return `<div class="review">
        <h1 class="name">${name}</h1>
        <p class="date">${date}</p>
        <p class="msg">${msg}</p>
      </div>`;
    });
    const customerReviews = $customerReviews.join('');

    const altPicture = `${this.#name} - ${this.#city}`;

    this.innerHTML = `<article id="content" class="container">
        <div class="detail_restaurants"">
            <div class="main_info">
                <div class="thumbnail">
                    <img src="${this._buildPictureUrl()}" alt="${altPicture}">
                    <span>${this.#city}</span>
                </div>
                <div class="detail">
                    <h1>${this.#name}</h1>
                    <p>${this.#address}</p>
                    <p>${this.#desc}</p>
                </div>
            </div>
            <div class="menus">
                <h1>Menus</h1>
                <div class="menu">
                    <div class="foods">
                        <h1 class="title">Foods</h1>
                        <ol>${foodMenus}</ol>
                    </div>
                    <div class="driks">
                        <h1 class="title">Drinks</h1>
                        <ol>${drinkMenus}</ol>
                    </div>
                </div>
            </div>
            <div class="customer_reviews">
                <h1>Customer Reviews</h1>
                <div class="reviews">${customerReviews}</div>
            </div>
        </div>
    </article>${like.outerHTML}`;
  }

  _buildPictureUrl() {
    return `${CONFIG.BASE_IMAGE_URL}/${IMAGE_RESOLUTION.MEDIUM}/${
      this.#pictureId
    }`;
  }
}

export default DetailRestaurant;
