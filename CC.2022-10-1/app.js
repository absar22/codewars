// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// P: Given array A and a random value X. want to see if A has X in it. A can have numbers, strings. X can be a numbers ora string. Is it ever have an empty array? Undefined ? Or any special character
// R: True if X is in A, False if X is Not 
// E: Given [1,2,3] as A and 4 as X , should return false
//    Given [7,5,8] as A and 5 as X , should return true
//    Given [] as A and 5 as X , should return true False
// P: Make a function that take two parameter : an array and a random number
function check(a, x) {
  // Look through the a and see if there are any element that match x.
  // conditional :IF they do return TRUE else FALSE
  return a.map(element => element === x ? true : false)
}

console.log(check([1,2,3], 4)) //should return false
console.log(check([7,5,8], 5)) //should return true