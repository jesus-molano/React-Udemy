import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp.js";
import heroes from "../../data/heroes.js";

describe('08-imp-exp tests', () => {
  test('should return a hero by id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find(heroe => heroe.id === id);
    expect(heroe).toEqual(heroeData);
  })
  test('should return undefined if hero doesnt exist', () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  })
  test('should be a DC hero', () => {
    const owner = 'DC';
    const heroesDC = getHeroesByOwner(owner);
    const heroesTest = heroes.filter(heroe => heroe.owner === owner);
    expect(heroesDC).toEqual(heroesTest);
  })
  test('should be a Marvel hero', () => {
    const heroesMarvel = getHeroesByOwner('Marvel');
    expect(heroesMarvel.length).toBe(2);
  })

})


