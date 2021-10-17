// Variables y Constantes
const firstname = 'Jesus';
const lastname = 'Molano';

let valueDice = 5;
valueDice = 4;

console.log(firstname, lastname, valueDice); // Jesus Molano 4

// scope
if (true) {
  const firstname = "Pablo";
  let valueDice = 6;
  console.log(firstname, valueDice); //Pablo 6
}
console.log(firstname, valueDice); //Jesus 4

// var no se debe de usar!