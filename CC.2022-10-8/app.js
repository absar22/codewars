// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// P: It is always gonna be an integer? Or we will get any special characters? 
// R Return  a new array with each value doubled
// E: If we are given [1,2,3] should return [2,4,6]
//    If we are given [4,5,6] should return [8,10,12]
//    If we are given [7,8,9] should return [14,16,18]
// P:
// Make a function that takes in array
function maps(x){
  return x.map(value => value*2)
}
// Map through an array and multiple each element by Two & also return 
console.log(maps([1,2,3]),[2,4,6])