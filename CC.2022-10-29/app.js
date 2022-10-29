// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if(!array || array.length === 0 || array.length === 1 || array.length === 2){
    return 0
  }
  let sortedValue = array.sort((a,b)=> a-b)
  let removeFirst = sortedValue.shift()
  let removeLast = sortedValue.pop()
  return sortedValue.reduce((acc,c) => acc +c)
  
}

console.log(sumArray([1, 1, 11, 2, 3 ]))