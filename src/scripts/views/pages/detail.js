import UrlParser from '../../routes/url-parser';
import DicodingRestaurantApi from '../../data/dicoding-restaurant-api';

const Favorite = {
  async render() {
    const restaurantsElm = document.createElement('x-detail-restaurant');

    return restaurantsElm.outerHTML;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const restaurant = await DicodingRestaurantApi.restaurantDetail(url?.id);

    const restaurantsElm = document.querySelector('x-detail-restaurant');
    restaurantsElm.restaurant = restaurant;
  },
};

export default Favorite;
