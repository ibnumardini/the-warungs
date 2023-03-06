import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    const restaurantsElm = document.createElement('x-list-restaurant');

    return restaurantsElm.outerHTML;
  },

  async afterRender() {
    const favRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    const restaurantsElm = document.querySelector('x-list-restaurant');

    restaurantsElm.page = { pageTitle: 'Favorites' };
    restaurantsElm.restaurants = favRestaurants;
  },
};

export default Favorite;
