// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  if(numbers.length === 0) return []
  const minIndex = numbers.indexOf(Math.min(...numbers))
  return numbers.filter((_,i) => i !== minIndex)
  
}

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]


var capitals = function (word) {
	// Write your code here
  return word.split('').map((e,i) => e === e.toUpperCase() ? i : -1).filter((e,i) => e !== -1)
};


// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
  for(let i=0; i < a.length; i++){
    if(a[i] > limit){
      return false
    }
  }
  return true
}


// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number=function(array){
  //your awesome code here
  return array.map((e,i) => `${i+1}: ${e}`)
}