import { getHeroById } from '../bases/08-import-exports'

// Promises

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroById(2);
//     resolve(hero);
//     reject('No se pudo encontrar el heroe');
//   }, 2000);
// });

// promise
//   .then(result => console.log('Hero: ', result))
//   .catch(error => console.error(error))

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      hero
        ? resolve(hero)
        : reject('No se pudo encontrar el heroe');
    }, 2000);
  });
}

getHeroByIdAsync(7)
  .then(hero => console.log('Heroe: ', hero))
  .catch(err => console.error(err));
// getHeroByIdAsync(2)
//   .then(console.log)
//   .catch(console.error);