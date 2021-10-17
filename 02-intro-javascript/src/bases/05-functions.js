// Funciones

// de esta manera podriamos sobreescrivir la funcion sin querer
function sayHi(name) {
  return `Hi, ${name}`;
}
sayHi = 20;
console.log(sayHi); //return 20

// de esta otra no podriamos sobreescribir la constante
const goodBye = function (name) {
  return `Bye, ${name}`;
}
//goodBye = 30;
//console.log(goodBye); // Daria error

// Arrow functions
const seeYa = name => `See you later, ${name}`;

console.log(seeYa('Vegeta'));

// Cambiar return por ( )
const getActiveUser = username => ({
  id: '2131341',
  username: username,
})

const activeUser = getActiveUser('Juan')
console.log(activeUser);