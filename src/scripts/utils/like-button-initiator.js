import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    const like = document.createElement('x-like');
    like.state = false;

    this._likeButtonContainer.innerHTML = like.outerHTML;

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);

      this._renderButton();
    });
  },

  _renderLiked() {
    const like = document.createElement('x-like');
    like.state = true;

    this._likeButtonContainer.innerHTML = like.outerHTML;

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);

      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
