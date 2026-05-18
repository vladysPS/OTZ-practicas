// @ts-nocheck
console.log('pango-favorite-button-logic.js loaded!');

class FavoriteButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', this.handleClick);
    this.isFavorite = false;
  }

  handleClick = () => {
    console.log("you've clicked this button",this.dataset.productHandle);
  };

}

customElements.define('favorite-button', FavoriteButton);