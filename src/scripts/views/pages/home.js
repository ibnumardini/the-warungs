import DicodingRestaurantApi from '../../data/dicoding-restaurant-api';

const Home = {
  async render() {
    const restaurantsElm = document.createElement('x-list-restaurant');

    return restaurantsElm.outerHTML;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantApi.restaurants();

    const restaurantsElm = document.querySelector('x-list-restaurant');

    restaurantsElm.page = { pageTitle: 'Explores' };
    restaurantsElm.restaurants = restaurants;
  },
};

export default Home;
