console.log("loaded test events");

document.addEventListener('shopify:page:view', (event) => {
    console.log('Standard storefront page view event fired!');
    console.log('Payload:', event.detail); 
  });