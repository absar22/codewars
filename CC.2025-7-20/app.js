// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

const noOdds = values => values.filter(x => x % 2 === 0)


// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.
function stringy(size) {
  // your code here 
  let str = ''
  for(let i = 0 ; i < size; i++){
    str+= i % 2 === 0 ? '1' : '0'
  }
  return str
}
