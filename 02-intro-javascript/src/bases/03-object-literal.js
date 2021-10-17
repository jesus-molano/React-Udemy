const person = {
  name: 'Jesus',
  lastname: 'Molano',
  age: 26,
  address: {
    city: "S/C Tenerife",
    zip: 38108,
    lat: 14.543,
    lng: 34.4322,
  }
};

//console.log({ person }); // {person: person}
console.log(person);

// Copia la referencia del objeto
//const person2 = person;
//person2.name = 'Peter'

//console.log(person);
//console.log(person2);

// Spread operator
const person3 = { ...person, name: 'Paco' };

console.log(person);
console.log(person3);