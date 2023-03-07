class Rating extends HTMLElement {
  #baseRating = 5;

  #rating;

  #voidRating;

  set rating({ rating, baseRating }) {
    if (baseRating) this.#baseRating = baseRating;

    this.#rating = Math.floor(parseInt(rating, 32));
    this.#voidRating = this.#baseRating - this.#rating;

    this.render();
  }

  render() {
    let rating = '';
    for (let i = 0; i < this.#rating; i += 1) {
      rating += '<span class="fa fa-star extras__rating_checked"></span>';
    }

    let voidRating = '';
    for (let i = 0; i < this.#voidRating; i += 1) {
      voidRating += '<span class="fa fa-star"></span>';
    }

    this.innerHTML = `${rating}${voidRating}`;
  }
}

export default Rating;
