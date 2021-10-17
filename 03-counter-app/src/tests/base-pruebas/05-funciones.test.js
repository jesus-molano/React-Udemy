import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('05-funciones tests', () => {
  test('should return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser();
    expect(user).toEqual(userTest);
  })

  test('should return an object with params', () => {
    const nombre = "Jesus";
    const userTest = {
      uid: 'ABC567',
      username: nombre
    }
    const user = getUsuarioActivo(nombre);
    expect(user).toEqual(userTest);
  })

})
