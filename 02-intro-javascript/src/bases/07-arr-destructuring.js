// Destructuring arrays

const characters = ['Goku', 'Vegeta', 'Picolo'];

// dejar espacios vacios de las posiciones que no queramos desestructurar
const [, ch2, ch3] = characters;

console.log(ch2);
console.log(ch3);

const returnArr = () => ['ABC', 123];

const [letters, numbers] = returnArr();
console.log(letters, numbers);

const usarEstado = (valor) => {
  return [valor, () => {
    console.log('Hello world');
  }];
};

const [nombre, setNombre] = usarEstado('Goku');
console.log(nombre);
setNombre();