// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

function squareDigits(num){
   let square =   num.toString().split('').map(x => x**2)
   return +(square.join(''))
  
}


// our task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321




const descendingOrder = n =>  +( n.toString().split('').sort((a,b) => b - a).join(''))

// Task
// Given an integral number, determine if it's a square number:

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n)) ? true : false
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(e => typeof e === 'number')
}