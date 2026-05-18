// @ts-nocheck
console.log('pango-favorite-button-logic.js loaded!');
//laod this on page /collections/otz-all-products

document.addEventListener('DOMContentLoaded', () => {
    const likedProducts = [];
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));

  const heartSvgArray = document.querySelectorAll('.p-heart-svg');
  console.log('Heart SVG elements found:', heartSvgArray.length);
  heartSvgArray.forEach((heartSvg) => {
    heartSvg.addEventListener('click', () => {
        // console log alse the data-product-handle attribute of the clicked heart svg
        const productHandle = heartSvg.getAttribute('data-product-handle');
        console.log('Heart SVG clicked for product handle:', productHandle);
        // 1check if this product is in the likedProducts array in local storage
        const likedProducts = JSON.parse(localStorage.getItem("likedProducts"));
        if (likedProducts.includes(productHandle)) {
            // if it is, remove it from the array and update local storage
            const index = likedProducts.indexOf(productHandle);
            likedProducts.splice(index, 1);
            localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
            console.log('Product removed from liked products:', productHandle);
        } else {
            // if it is not, add it to the array and update local storage
            likedProducts.push(productHandle);
            localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
            console.log('Product added to liked products:', productHandle);
        }
    });
  });
});