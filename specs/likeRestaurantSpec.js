import '../src/scripts/views/components';

import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import RestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

import * as TestFactories from './helpers/testFactories';

describe('liking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    const labelLike = '[aria-label="like this restaurant"]';

    expect(document.querySelector(labelLike)).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    const labelLiked = '[aria-label="unlike this restaurant"]';

    expect(document.querySelector(labelLiked)).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await RestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    RestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await RestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    RestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
