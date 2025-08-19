// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


function sumDigits(number) {
  return Math.abs(number).toString().split('').map(Number).reduce((acc,cv) => acc + Math.abs(cv),0)
}


// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  
return str.split('').reverse().filter(c => c.toLowerCase() !== c.toUpperCase()).join('');  
  
  
}