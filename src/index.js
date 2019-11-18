import init, { loadFavourites } from './lib/display-media';

document.addEventListener('DOMContentLoaded', () => {

  const page = document.querySelector('body');
  const isFavourites = page.classList.contains('favourites-page');

  if (isFavourites) {
    loadFavourites();
  } else {
    const apod = document.querySelector('.apod');
    init(apod);
  }
});
