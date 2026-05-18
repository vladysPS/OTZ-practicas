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
  getFavorites() {
    return JSON.parse(localStorage.getItem('favoriteProducts')) || [];
  }

  handleClick = () => {
    const productHandle = this.dataset.productHandle;

    let favorites = this.getFavorites();

    if (this.isFavorite) {
      // REMOVE from favorites
      favorites = favorites.filter(
        handle => handle !== productHandle
      );

      this.isFavorite = false;

      console.log('Removed from favorites:', productHandle);
    } else {
      // ADD to favorites
      favorites.push(productHandle);

      this.isFavorite = true;

      console.log('Added to favorites:', productHandle);
    }

    this.saveFavorites(favorites);

    console.log('Updated favorites:', favorites);
  };


}

customElements.define('favorite-button', FavoriteButton);