// @ts-nocheck
console.log('pango-favorite-button-logic.js loaded!');
//laod this on page /collections/otz-all-products
class FavoriteButton extends HTMLElement {
  constructor() {
    super();

    // Get product handle from data attribute
    this.productHandle = this.dataset.productHandle;

    // Bind methods
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  connectedCallback() {
    // Runs when element appears in DOM

    this.render();

    // Add click listener
    this.addEventListener('click', this.toggleFavorite);
  }

  disconnectedCallback() {
    // Cleanup if removed from DOM
    this.removeEventListener('click', this.toggleFavorite);
  }

  getFavorites() {
    const favorites = localStorage.getItem('favorites');

    return favorites ? JSON.parse(favorites) : [];
  }

  saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  isFavorited() {
    const favorites = this.getFavorites();

    return favorites.includes(this.productHandle);
  }

  toggleFavorite() {
    let favorites = this.getFavorites();

    if (favorites.includes(this.productHandle)) {
      // Remove favorite
      favorites = favorites.filter(
        handle => handle !== this.productHandle
      );
    } else {
      // Add favorite
      favorites.push(this.productHandle);
    }

    this.saveFavorites(favorites);

    this.render();
  }

  render() {
    if (this.isFavorited()) {
      this.innerHTML = '❤️ Favorited';
    } else {
      this.innerHTML = '♡ Favorite';
    }
  }
}

// Register custom element
customElements.define('favorite-button', FavoriteButton);