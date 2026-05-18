// @ts-nocheck
console.log('pango-favorite-button-logic.js loaded!');

// Initialize localStorage only once
if (!localStorage.getItem('favoriteProducts')) {
  localStorage.setItem('favoriteProducts', JSON.stringify([]));
}

class FavoriteButton extends HTMLElement {
  constructor() {
    super();

    this.isFavorite = false;
  }

  connectedCallback() {
    this.addEventListener('click', this.handleClick);

    const favorites = this.getFavorites();

    this.isFavorite = favorites.includes(this.dataset.productHandle);

    console.log(
      this.dataset.productHandle,
      'initial favorite state:',
      this.isFavorite
    );
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }

  handleClick = () => {
    this.isFavorite = !this.isFavorite;

    console.log("we clicked in-->",this.dataset.productHandle, this.isFavorite);
  };

  getFavorites() {
    return JSON.parse(localStorage.getItem('favoriteProducts')) || [];
  }
}

customElements.define('favorite-button', FavoriteButton);