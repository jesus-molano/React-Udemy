import { getSaludo } from "../../base-pruebas/02-template-string";

describe('02-template-string test', () => {
  test('should return "Hola " + {name}', () => {
    const nombre = "Jesus";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola ' + nombre);
  })
  test('should return "Hola Carlos" by default', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Carlos');
  })

})
