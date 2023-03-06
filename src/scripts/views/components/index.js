import Restaurant from './restaurant';
import ItemRestaurant from './restaurant/item-restaurants';
import DetailRestaurant from './restaurant/detail';
import Rating from './rating';

customElements.define('x-list-restaurant', Restaurant);
customElements.define('x-item-restaurant', ItemRestaurant);
customElements.define('x-detail-restaurant', DetailRestaurant);
customElements.define('x-rating', Rating);
