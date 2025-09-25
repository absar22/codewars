// ask:
// Write a function that will accept two parameters: variable and type and check if type of variable is matching type.
//  Return true if types match or false if not.

// Examples:
// 42, "number"   --> true
// "42", "number" --> false

const typeValidation = (variable, type) =>  typeof(variable) === type

// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843

function sumSquares(array) {
//   var result = 0;
//   for (let i = 0; i < array.length; i++) {
//     result += array[i] ** 2;
//   }
//   return result;
  return array.map(arr => arr ** 2).reduce((a,b) => a + b, 0)
}