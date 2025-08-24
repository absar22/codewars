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