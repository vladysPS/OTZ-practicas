// @ts-nocheck
console.log('pango-favorite-button-logic.js loaded!');
//laod this on page /collections/otz-all-products

class FavoriteButton extends HTMLElement {
    constructor() {
    super();
    this.productHandle = this.dataset.productHandle;
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }
}

customElements.define('favorite-button', FavoriteButton);