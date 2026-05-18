// @ts-nocheck
console.log('pango-favorite-button-logic.js loaded!');

class FavoriteButton extends HTMLElement {
  constructor() {
    super();

    this.isFavorite = false;
  }

  connectedCallback() {
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }

  handleClick = () => {
    this.isFavorite = !this.isFavorite;

    console.log(this.dataset.productHandle, this.isFavorite);
  };
}

customElements.define('favorite-button', FavoriteButton);