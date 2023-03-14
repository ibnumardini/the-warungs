Feature('Liking Restaurants');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('No data found.', '.restaurant-item__not__found');
});

Scenario('liking restaurants', async ({ I }) => {
  I.see('No data found.', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurants__card a', 10);

  const restaurant = locate('.restaurants__card a').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);
  I.click(restaurant);

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants__card');

  const favRestaurantTitle = await I.grabTextFrom('.restaurants__card a');

  assert.strictEqual(restaurantTitle, favRestaurantTitle);
});

Scenario('unliking restaurants', async ({ I }) => {
  I.see('No data found.', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurants__card a', 10);

  const restaurant = locate('.restaurants__card a').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);
  I.click(restaurant);

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants__card');

  const favRestaurantTitle = await I.grabTextFrom('.restaurants__card a');

  assert.strictEqual(restaurantTitle, favRestaurantTitle);

  const favRestaurant = locate('.restaurants__card a').first();
  I.click(favRestaurant);

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('No data found.', '.restaurant-item__not__found');
});
