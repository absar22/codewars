// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  return s.split(' ').map(x => x.length).sort((a,b) => a - b  ,0)[0]
}


// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// your code
  return s.split('').map((x,i) => x.toUpperCase() + x.toLowerCase().repeat(i)).join('-')
}


// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


function solution(nums){
  if(nums === null ) return []
   return nums.sort((a,b) => a - b, 0)
 }


//  Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

function arithmetic(a, b, operator){
  //your code here!
  if(operator === 'add') return a + b
  else if(operator === 'subtract') return a - b
  else if (operator === 'multiply') return a * b
  else if (operator === 'divide') return a / b
}