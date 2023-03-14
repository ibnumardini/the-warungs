class Like extends HTMLElement {
  #like;

  set state(like) {
    this.#like = like;

    this.render();
  }

  render() {
    const className = this.#like ? 'unlike' : 'like';
    const icon = this.#like ? 'fa-heart' : 'fa-heart-o';

    this.innerHTML = `
    <button aria-label="${className} this restaurant" id="likeButton" class="like">
       <i class="fa ${icon}" aria-hidden="true"></i>
    </button>
  `;
  }
}

export default Like;
