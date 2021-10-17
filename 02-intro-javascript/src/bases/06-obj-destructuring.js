// Destructuring

const person = {
  secretID: 'Tony',
  age: 45,
  superName: 'Ironman',
};

const { secretID, age, superName } = person;
console.log(secretID, age, superName);

const usarContexto = ({ secretID, age, superName, power = 'Super Armor' }) => {
  return {
    publicID: superName,
    years: age,
    devices: {
      armor: 'MK-54',
      ai: 'Jarvis',
    }
  }
}

const { publicID, years, devices: { armor, ai } } = usarContexto(person);
console.log(`Alias: ${publicID}, Age: ${years}, Armor: ${armor} A.I.: ${ai}`);
