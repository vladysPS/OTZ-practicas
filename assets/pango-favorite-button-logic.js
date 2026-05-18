// @ts-nocheck

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

    requestAnimationFrame(() => {
      this.heartFull = this.querySelector('.heart-full');
      this.heartEmpty = this.querySelector('.heart-empty');

      const favorites = this.getFavorites();

      this.isFavorite = favorites.includes(this.dataset.productHandle);
      this.updateUI(this.isFavorite);
    });
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }
  getFavorites() {
    return JSON.parse(localStorage.getItem('favoriteProducts')) || [];
  }
  saveFavorites(favorites) {
    localStorage.setItem(
      'favoriteProducts',
      JSON.stringify(favorites)
    );
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
    } else {
      // ADD to favorites
      favorites.push(productHandle);

      this.isFavorite = true;
    }

    this.saveFavorites(favorites);
    this.updateUI(this.isFavorite);
  };
  updateUI(isFavorite){
    if (isFavorite) {
      this.heartFull.style.display = 'block';
      this.heartEmpty.style.display = 'none';
    } else {
      this.heartFull.style.display = 'none';
      this.heartEmpty.style.display = 'block';
    }
  };

}

customElements.define('favorite-button', FavoriteButton);