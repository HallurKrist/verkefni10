
/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

import { randomDate } from './helpers';

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'vbEqKxra9gKCha445ADaOLc5hGalfPIoEbQdKW23';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';


/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
  const date = randomDate();
  // const date = '2019-11-18';

  const link = `${URL}?api_key=${API_KEY}&date=${date}`;
  const result = await fetch(link);

  if (result.status !== 200) {
    return console.error('Non 200 status');
  }
  const data = await result.json();
  return data;
}
