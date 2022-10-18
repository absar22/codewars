// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum (numbers) {
  "use strict";
   return numbers.reduce((acc,c) => acc + c, 0)
  
};

console.log(sum([1,2,3-9,7,0.8]))


// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let newArray = []
  
  for(let i = n; i > 0; i--){
    newArray.push(i)
  }
  return newArray
  
//   return [];
  
};


// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}

console.log(makeUpperCase('hello world'))

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace('!', '')
//   return '';
}

console.log(removeExclamationMarks('Hello world!'))

// Another solution with removing every Exclamation marks
function removeExclamationMarks(s) {
  return s.replaceAll('!', '')
//   return '';
}

