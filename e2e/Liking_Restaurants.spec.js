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

  const xPathTitleCard =
    '//*[@id="content"]/div/x-item-restaurant[1]/div/a/div[2]/h2';

  const restaurant = locate('.restaurants__card a').first();
  const restaurantTitle = await I.grabTextFrom(xPathTitleCard);
  I.click(restaurant);

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants__card');

  const favRestaurantTitle = await I.grabTextFrom(xPathTitleCard);

  assert.strictEqual(restaurantTitle, favRestaurantTitle);
});

Scenario('unliking restaurants', async ({ I }) => {
  I.see('No data found.', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurants__card a', 10);

  const xPathTitleCard =
    '//*[@id="content"]/div/x-item-restaurant[1]/div/a/div[2]/h2';

  const restaurant = locate('.restaurants__card a').first();
  const restaurantTitle = await I.grabTextFrom(xPathTitleCard);
  I.click(restaurant);

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants__card');

  const favRestaurantTitle = await I.grabTextFrom(xPathTitleCard);

  assert.strictEqual(restaurantTitle, favRestaurantTitle);

  const favRestaurant = locate('.restaurants__card a').first();
  I.click(favRestaurant);

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('No data found.', '.restaurant-item__not__found');
});
