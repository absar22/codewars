// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  return s.sort().map((e,i) => e )[0].split('').join('***')
  }


  // Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
  
  function take(arr, n) {
    
    return arr.slice(0,n)
  }