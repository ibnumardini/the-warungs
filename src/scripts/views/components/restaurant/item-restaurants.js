import { CONFIG, IMAGE_RESOLUTION } from '../../../globals/config';

class ItemRestaurant extends HTMLElement {
  #id;

  #pictureId;

  #name;

  #city;

  #rating;

  #desc;

  set restaurant({
    id, pictureId, name, city, rating, description,
  }) {
    this.#id = id;
    this.#pictureId = pictureId;
    this.#name = name;
    this.#city = city;
    this.#rating = rating;
    this.#desc = description;

    this.render();
  }

  render() {
    const rating = document.createElement('x-rating');
    rating.rating = { rating: this.#rating };

    const altPicture = `${this.#name} - ${this.#city}`;

    this.innerHTML = `
        <div class="restaurants__card">
        <a href="#/detail/${this.#id}">
        <div class="card__thumbnail">
            <img class="lazyload" src="${this._buildPictureUrl()}" alt="${altPicture}" />
            <p class="thumbnail__location">${this.#city}</p>
        </div>
        <div class="card__detail">
            <div class="detail__extras">
            <p class="extras__rating">${rating.outerHTML}</p>
            </div>
            <h2 class="detail__title">${this.#name}</h2>
            <p class="detail__desc">${this._buildSimpleDesc()}</p>
        </div>
        </a>
    </div>`;
  }

  _buildPictureUrl() {
    return `${CONFIG.BASE_IMAGE_URL}/${IMAGE_RESOLUTION.SMALL}/${
      this.#pictureId
    }`;
  }

  _buildSimpleDesc() {
    const shortDesc = this.#desc.slice(0, 180);

    return `${shortDesc}..`;
  }
}

export default ItemRestaurant;
