// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.


function isPowerOfTwo(n){
  //.. should return true or false ..
  if(n <= 0){
    return false
  }
 
  return (n &  (n-1)) === 0
}


// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"
// Good luck!

function calculator(a, b, sign) {
  // Attempt to convert input strings to numbers
  a = parseFloat(a);
  b = parseFloat(b);





  if (sign === '+') {
    return a + b;
  } else if (sign === '-') {
    return a - b;
  } else if (sign === '*') {
    return a * b;
  } else if (sign === '/') {
    return a / b;
  } else if (isNaN(a) || isNaN(b)) {
    return "unknown value";
  } else {
    return "unknown value";
  }
}


//   Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.


  
function correctTail(bod, tail) {
  var sub = bod.substr(bod.length - tail.length);
  
  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}


// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(l, w, h){
  let area = 2*l*w + 2*l*h + 2*w*h
  let volume = l*w*h
  return [area, volume]
}


// This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results =  {sanity: 'Hello'};
  return results;
}