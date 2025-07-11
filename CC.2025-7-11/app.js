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