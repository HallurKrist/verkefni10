
/**
 * Hreinsa börn úr elementi
 *
 * @param {object} element Element sem á að hreinsa börn úr
 */
export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 * Búa til element og aukalega setja börn ef send með
 *
 * @param {string} name Nafn á element
 * @param  {...any} children Börn fyrir element
 */
export function el(name, ...children) {
  const element = document.createElement(name);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }

  return element;
}

/**
* Skilar tölu af handahófi á bilinu [min, max]
*/
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tDay() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  today = `${yyyy}-${mm}-${dd}`;
  return today;
}


export function randomDate() {
  // Jun 16, 1995
  const currentDate = tDay();

  const cDList = currentDate.split('-');
  let maxMonth = 12;
  let maxDay = 31;
  let minMonth = 1;
  let minDay = 1;
  const month30 = [4, 6, 9, 11];

  const year = randomNumber(1995, cDList[0]);
  if (`${year}` === cDList[0]) {
    maxMonth = parseInt(cDList[1], 10);
    maxDay = parseInt(cDList[2], 10);
  } else if (year === 1995) {
    minMonth = 6;
    minDay = 16;
  }
  const month = randomNumber(minMonth, maxMonth);

  if (year !== cDList) {
    if (month in month30) {
      maxDay = 30;
    } else if (month === 2) {
      maxDay = 28;
    }
  }
  const day = randomNumber(minDay, maxDay);

  const date = `${year}-${month}-${day}`;
  return date;
}

export function makeVideo(vidURL) {
  const iframe = el('iframe');

  iframe.setAttribute('src', `${vidURL}?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1`);
  iframe.setAttribute('class', 'video');

  return iframe;
}

export function makeImgForFav(parent, img) {
  const container = el('section');
  const title = el('h2', img.title);

  container.setAttribute('class', 'favPage');
  title.setAttribute('class', 'favPage__title');

  container.appendChild(title);

  if (img.media_type === 'image') {
    const image = el('img');
    image.setAttribute('src', `${img.url}`);
    container.appendChild(image);
  } else {
    const vid = makeVideo(img.url);
    container.appendChild(vid);
  }

  parent.appendChild(container);
}

export function clearSaved() {
  localStorage.removeItem('images');
  const page = document.querySelector('main');
  empty(page);
}
