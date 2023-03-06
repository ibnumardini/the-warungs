import { CONFIG, IMAGE_RESOLUTION } from '../../../globals/config';

class ItemRestaurant extends HTMLElement {
  #id;

  #pictureId;

  #name;

  #city;

  #rating;

  #desc;

  set restaurant({ id, pictureId, name, city, rating, description }) {
    this.#id = id;
    this.#pictureId = this._buildPictureUrl(pictureId);
    this.#name = name;
    this.#city = city;
    this.#rating = rating;
    this.#desc = this._buildSimpleDesc(description);

    this.render();
  }

  render() {
    const rating = document.createElement('x-rating');
    rating.rating = { rating: this.#rating };

    this.innerHTML = `
        <div class="restaurants__card">
        <a href="#/detail/${this.#id}">
        <div class="card__thumbnail">
            <img src="${this.#pictureId}" alt="${this.#name} - ${this.#city}" />
            <p class="thumbnail__location">${this.#city}</p>
        </div>
        <div class="card__detail">
            <div class="detail__extras">
            <p class="extras__rating">${rating.outerHTML}</p>
            </div>
            <h2 class="detail__title">${this.#name}</h2>
            <p class="detail__desc">${this.#desc}</p>
        </div>
        </a>
    </div>`;
  }

  // eslint-disable-next-line class-methods-use-this
  _buildPictureUrl(id) {
    return `${CONFIG.BASE_IMAGE_URL}/${IMAGE_RESOLUTION.SMALL}/${id}`;
  }

  // eslint-disable-next-line class-methods-use-this
  _buildSimpleDesc(desc) {
    const shortDesc = desc.slice(0, 180);

    return `${shortDesc}..`;
  }
}

export default ItemRestaurant;
