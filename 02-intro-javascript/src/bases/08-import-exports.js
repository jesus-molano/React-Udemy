// IMPORTS AND EXPORTS

import heroes from '../data/heroes';
// import heroes, { owners } from '../data/heroes';

// console.log(owners);

// Find (1 element)
const getHeroById = (id) => {
  return heroes.find(hero => hero.id === id);
}
// console.log(getHeroById(2));

// Filter (+ elements)
const getHeroByOwner = (owner) => {
  return heroes.filter(hero => hero.owner === owner);
}
// console.log(getHeroByOwner('Marvel'));

export {
  getHeroById,
  getHeroByOwner,
}