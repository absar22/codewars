// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
  // Return all non-odd values
  return values.filter(x => x % 2 === 0)
}


// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.