// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

function shorterReverseLonger(a,b){
if(a.length >= b.length){
    return b + a.split('').reverse().join('') + b
  }else{
    return a + b.split('').reverse().join('') + a
  }
}

// Your Task
// Inside the solution function you have to require express and start a server.

// The PORT and HOST are going to be pre-loaded in the process.env object (in a node application process.env stores the environment configuration).

// process.env = {
//   PORT: 3000,
//   HOST: '0.0.0.0',
// };

const solution = () => {
  var express = require('express');
  var app = express()
  var PORT = process.env.PORT;
  var HOST = process.env.HOST;
  
  app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  })
};

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples ( Input --> Output )
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

function findNextSquare(sq) {
 let root = Math.sqrt(sq)
 if(root % 1 === 0){
   let perfectSum = root + 1
   return perfectSum * perfectSum
 }
  return -1
}

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. 
// The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n) {
  let count = 0;
  
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++;              
      if (i !== n / i) {    
        count++;
      }
    }
  }
  
  return count;
}

// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

// Examples
// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679

function minValue(values){
 let val = values.filter((element,index,arr) => arr.indexOf(element) === index).sort((a,b) => a - b).join('')
  return +val
}