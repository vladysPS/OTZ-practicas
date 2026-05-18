// @ts-nocheck
console.log('pango-favorite-button-logic.js loaded!');

class FavoriteButton extends HTMLElement {
  constructor() {
    super();

    this.productHandle = this.dataset.productHandle;
  }

}

customElements.define('favorite-button', FavoriteButton);