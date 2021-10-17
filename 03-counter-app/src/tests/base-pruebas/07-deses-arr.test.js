import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('desestructuration test', () => {
    test('should return a string and a number', () => {
        const [letras, numeros] = retornaArreglo();
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })

})







