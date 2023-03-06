import API_ENDPOINT from '../globals/api-endpoint';

class DicodingRestaurantApi {
  static async restaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }
}

export default DicodingRestaurantApi;
