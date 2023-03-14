/* eslint-disable object-curly-newline */
class Restaurant extends HTMLElement {
  #restaurants;

  #pageTitle;

  set restaurants(restaurants) {
    this.#restaurants = restaurants;

    this.render();
  }

  set page({ pageTitle }) {
    this.#pageTitle = pageTitle;
  }

  render() {
    let restaurantItem = '';

    if (!this.#restaurants.length) {
      restaurantItem = '<p class="restaurant-item__not__found">No data found.</p>';
    } else {
      const restaurantItemArr = this.#restaurants.map((restaurant) => {
        const restItemElm = document.createElement('x-item-restaurant');
        restItemElm.restaurant = restaurant;

        return restItemElm.outerHTML;
      });

      restaurantItem = restaurantItemArr.join('');
    }

    this.innerHTML = `<article id="content" class="container">
      <h1 class="content__title">${this.#pageTitle}</h1>
      <div class="content__restaurants">${restaurantItem}</div>
    </article>`;
  }
}

export default Restaurant;
