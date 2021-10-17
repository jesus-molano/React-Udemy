import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas'
import heroes from '../../data/heroes';

describe('09-promesas tests', () => {
  test('should return a async Hero', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(heroe => {
        expect(heroe).toBe(heroes[0]);
        done();
      })
  })
  test('should return error if hero.id doesnt exist', (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
      .catch(error => {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
      })
  })

})
