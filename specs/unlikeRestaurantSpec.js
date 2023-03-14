import '../src/scripts/views/components';

import RestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

import * as TestFactories from './helpers/testFactories';

describe('unliking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();

    RestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(() => {
    RestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    const labelLike = '[aria-label="unlike this restaurant"]';

    expect(document.querySelector(labelLike)).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    const labelLiked = '[aria-label="llike this restaurant"]';

    expect(document.querySelector(labelLiked)).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await RestaurantIdb.deleteRestaurant(1);

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
