// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  return arr.filter((_, x) =>  x % 2 === 0)
}

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

//  Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

//  Examples (input -> output)
//  * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

function mergeArrays(arr1, arr2) {
  
  let merge = arr1.concat(arr2)
  let sorted = merge.sort((a,b) => a -b)
  let removeDuplicateValue = sorted.filter((item, index) => sorted.indexOf(item) === index )
  return removeDuplicateValue
  
}

console.log(mergeArrays([1,3,5,6,6], [12,65,89,5,6]))

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
  //You got this!
  let newString = ''
  for(let i =1; i< str.length -1; i++){
    newString += str[i]
  }
   return newString
 };
 
 
  console.log(removeChar('Hello'))


  // Another way to do this coding challenge is 
  function removeChar(str){
    //You got this!
   return str.slice(1,-1)
   };


//    Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
   
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0]
    for(let i = 0 ; i< args.length; i++){
      if(args[i] < smallest){
        smallest = args[i]
      }
    }
    return smallest
  }
}

// Another easy way to solve this problem

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let sortedArray = args.sort((a,b)=> a-b)
    return sortedArray[0]
  } 
}



// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  if(operation === '+'){
     return value1 + value2
     }else if (operation === '-'){
       return value1 - value2
     } else if (operation === '*'){
       return value1 * value2
     } else if(operation === '/'){
       return  value1 / value2 
     }
}

console.log(basicOp('+', 4, 7))
console.log(basicOp('-', 18, 20))

// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i**2;
  
}

// Another solution 
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i**2;
  
}