// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor){
  let newArr = []
   for(let i = 0 ; i < numbers.length; i++){
     if(numbers[i] % divisor === 0){
       newArr.push(numbers[i])
     }
   }
  return newArr
}


// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
  let newArr = []
  for(let i = 0 ; i < array.length;i++){
   let root = Math.sqrt(array[i])
   if(Number.isInteger(root)){
     newArr.push(root)
   }else{
     newArr.push(array[i]**2)
   }
  }
  return newArr
}

// One liner
const squareOrSquareRoot = array => array.map(n => Number.isInteger(Math.sqrt(n))? Math.sqrt(n) : n**2)