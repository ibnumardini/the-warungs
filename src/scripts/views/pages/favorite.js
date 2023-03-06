const Favorite = {
  async render() {
    const restaurantsElm = document.createElement('x-list-restaurant');

    return restaurantsElm.outerHTML;
  },

  async afterRender() {
    const restaurantsElm = document.querySelector('x-list-restaurant');

    restaurantsElm.page = { pageTitle: 'Favorite' };
    restaurantsElm.restaurants = [];
  },
};

export default Favorite;
