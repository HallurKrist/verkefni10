// todo vísa í rétta hluti með import
import getRandomImage from './nasa-api';
import { empty, makeImgForFav, makeVideo, el, clearSaved } from './helpers'; // eslint-disable-line object-curly-newline

let image; // object sem inniheldur núverandi mynd á forsíðu.

/*
 * Sækir nýja Mynd af handahófi frá Nasa API og birtir hana á forsíðunni
 * ásamt titli og texta.
 */
async function getNewImage(apod) {
  const randomImg = await getRandomImage();
  const theTitle = apod.getElementsByClassName('apod__title')[0];
  const theExpl = apod.getElementsByClassName('apod__text')[0];
  let theImage;

  empty(theTitle);
  empty(theExpl);

  const theVideo = apod.querySelector('.video');

  if (!theVideo) {
    theImage = apod.querySelector('.apod__image');
    empty(theImage);
  } else {
    apod.replaceChild(el('img', 'apod__image'), theVideo);
    theImage = apod.querySelector('.apod__image');
  }

  if (randomImg.media_type === 'image') {
    theImage.setAttribute('src', `${randomImg.url}`);
  } else {
    const vid = makeVideo(randomImg.url);
    apod.replaceChild(vid, theImage);
  }

  theTitle.appendChild(document.createTextNode(`${randomImg.title}`));
  theExpl.appendChild(document.createTextNode(`${randomImg.explanation}`));

  image = randomImg;
}

/*
 * Vistar núverandi mynd í storage.
 */
function saveCurrentImage() {
  const oldImages = window.localStorage.getItem('images');
  if (oldImages === null) {
    const images = { length: 1, image1: image };
    const json = JSON.stringify(images);
    window.localStorage.setItem('images', json);
  } else {
    const imgJson = JSON.parse(oldImages);
    const oldLength = imgJson.length;
    const newLength = oldLength + 1;
    imgJson.length = newLength;
    const newName = `image${newLength}`;
    imgJson[newName] = image;
    const json = JSON.stringify(imgJson);
    window.localStorage.setItem('images', json);
  }
}

/*
 * Upphafsstillir forsíðuna. Setur event listeners á takkana, og sækir eina mynd.
 *
 */
export default function init() {
  const apod = document.querySelector('.apod');

  getNewImage(apod);

  const newImg = document.getElementById('new-image-button');
  const saveImg = document.getElementById('save-image-button');

  newImg.addEventListener('click', init);
  saveImg.addEventListener('click', saveCurrentImage);
}

/*
 * Fall fyrir favourites.html. Sér um að sækja allar vistuðu myndirnar og birta þær ásamt
 * titlum þeirra.
 */
export function loadFavourites() {
  const favPage = document.querySelector('main');
  const theImages = JSON.parse(window.localStorage.getItem('images'));

  if (theImages !== null) {
    let i;
    for (i = 0; i < theImages.length; i++) { //   eslint-disable-line no-plusplus
      makeImgForFav(favPage, theImages[`image${i + 1}`]);
    }
    const favPageHeader = document.querySelector('header');
    const clearButton = el('button', 'Hreinsa vistaðar  myndir');
    clearButton.classList.add('button', 'button--large');
    favPageHeader.appendChild(clearButton);

    clearButton.addEventListener('click', clearSaved);
  }
}
