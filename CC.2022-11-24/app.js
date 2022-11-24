// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34

function twoDecimalPlaces(n) {
  // Your code here
  return Number(n.toFixed(2))
}

// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b



function add(a,b){
  return a + b
}

function divide(a,b){
  return a / b
}

function multiply(a,b){
  return  a * b
}

function mod(a,b){
  return a % b
}
 
function exponent(a,b){
  return  a**b
}
  
function subt(a,b){
  return a - b
}



// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL


function array(arr){
  //Good luck
    
    return arr.split(',').slice(1,-1).join(' ') || null
  
  }

//   Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
  