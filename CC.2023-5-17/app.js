// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function(array) {
  let result = [];
  for(let i = 0; i < array.length; i++){
    result.push(`${i + 1}: ${array[i]}`);
  }
  return result;
};
var number=function(array){
  //your awesome code here
  return array.map((e,i) => `${i + 1}: ${e}`)
}



// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]


function largest(n, array) {
  // Find the n highest elements in a list
  if (n === 0) return []
  let sorted = array.sort((a,b) => a - b)
  return sorted.slice(-n)
}