// @ts-nocheck
console.log('pango-favorite-button-logic.js loaded!');

class FavoriteButton extends HTMLElement {
  constructor() {
    super();

    this.productHandle = this.dataset.productHandle;
  }
  this.addEventListener('click', this.handleClick);

  handleClick = () => {
    console.log("you've clicked this button",this.productHandle);
  };
  
}

customElements.define('favorite-button', FavoriteButton);