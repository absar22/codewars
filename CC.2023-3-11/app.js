// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
  // P  given two  positive or negative number 
  // R  return sum of both the number , if number are equal return either number
  // E
  // P
     let firstNum = Math.min(a,b)
     let lastNum = Math.max(a,b)
     let sum = 0
     for( let i = firstNum ; i <= lastNum ; i++){
        sum += i
     }
    return sum
  }