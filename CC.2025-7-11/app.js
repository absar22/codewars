// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


function pipeFix(numbers){
let newArr = []
let startingArr = numbers[0]
let endArr = numbers[numbers.length -1]
for(let i = startingArr; i <= endArr;i++){
  newArr.push(i)
}
  return newArr

}

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A){
  let r = (2*A)/Math.PI
  return r * r
}

// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

// Examples:

// n = 1 should return 1
// n = 5 should return 101
// n = 11 should return 1011

function toBinary(n){
   return Number(n.toString(2))
}


// Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

// Example
// With the numbers 1, 2, and 3, here are some possible expressions:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The maximum value that can be obtained is 9.


function expressionsMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a + (b * c),
    (a + b) * c,
    a * (b + c),
    (a * b) + c
  );
}
