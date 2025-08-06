// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

const take = (arr, n) => arr.slice(0,n)

// Task
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b; // 50 + 50 = 100
}

function equal2(){
  let a = v4,
      b = v2;
  return a - b; // 200 - 100 = 100
}

function equal3(){
  let a = v1,
      b = v5;
  return a * b; // 50 * 2 = 100
}

function equal4(){
  let a = v4,
      b = v5;
  return a / b; // 200 / 2 = 100
}

function equal5(){
  let a = v6,
      b = v3;
  return a % b; // 250 % 150 = 100
}


// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// -3.3424 is rounded -3.34


function twoDecimalPlaces(n) {
  return Number(n.toFixed(2))
}