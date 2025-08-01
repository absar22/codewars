// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  if(numbers.length !== 10) return 'Invalid input'
  const firstPart =  numbers.slice(0,3).join('')
  const secondPart = numbers.slice(3,6).join('')
  const thirdPart = numbers.slice(6,10).join('')
  return `(${firstPart}) ${secondPart}-${thirdPart}`
}


// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) return false
  const current = new Date(currentDate)
  const expired = new Date(expirationDate)
  return current <= expired        
}

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme (triplet) {
     let middleIndex = [...triplet].sort((a,b) => a - b)[1]
     return triplet.indexOf(middleIndex)
}


// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]


function fizzbuzz(n)
{
  let result = []
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0  && i % 5 === 0){
      result.push('FizzBuzz')
    }else if(i % 3 === 0){
      result.push('Fizz')
    }else if (i % 5 === 0){
      result.push('Buzz')
    }else{
      result.push(i)
    }
  }
  return result
}


// Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

function rowWeights(array){

 let team1 = 0
 let team2 = 0
 for(let i = 0; i < array.length;i++){
   if(i%2 === 0){
     team1 += array[i]
   }else {
     team2 += array[i]
   }
 }
  return [team1,team2]
}


// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

// It is guaranteed that there will always be a unique valid answer. More precisely:

// there will be no arrays with less than 2 elements
// there will be no arrays where all elements are equal


function isSortedAndHow(array) {
   let assending = true
   let dessinding = true
   for(let i = 0 ; i < array.length;i++){
     if(array[i] < array[i - 1]){
       assending = false
     }if(array[i] > array[i - 1]){
       dessinding = false
     }
   }
  if(assending){
    return "yes, ascending"
  }else if(dessinding){
    return "yes, descending"
  }else{
    return "no"
  }
}