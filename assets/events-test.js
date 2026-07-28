console.log("loaded test events");

import { PageViewEvent } from '@theme/standard-events';

document.addEventListener('DOMContentLoaded', () => {
  document.dispatchEvent(new PageViewEvent({
    page: {
      template: 'product',
      title: document.title,
      url: window.location.href,
    },
  }));
});