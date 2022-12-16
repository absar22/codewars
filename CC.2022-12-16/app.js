// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.



// PREP

// PARAMETER => We have an array as a parameter 
// RETURN => We want to return the sum of first lowest and second lowest number

function sumTwoSmallestNumbers(numbers) {  
  //Code here
  // we sorted the number in assending order
  let sorted = numbers.sort((a,b) => a - b)
  // we will return the first and second sum
  return sorted[0] + sorted[1]
  
  
}

// EXAMPLE 

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]),13)
console.log(sumTwoSmallestNumbers(10, 343445353, 3453445, 3453545353453),3453455)