// Arrays

// Array constructor
// const arr = new Array();

const arr = [1, 2, 3, 4];
console.log(arr);

// Copia la referencia en memoria
//let arr2 = arr;
//arr2.push(5)

let arr2 = [...arr, 5];
console.log(arr2);

const arrDouble = arr2.map(number => number * 2);

console.log(arrDouble);

