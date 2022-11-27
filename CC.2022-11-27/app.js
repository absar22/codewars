// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor){

  let value =  numbers.filter(x => x % divisor === 0)
 return value
}

// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// Examples:

// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"

function grader(score) {
  if(score > 1 || score < .6) return 'F'
  else if(score >= .9) return 'A'
  else if(score >= .8) return 'B'
  else if(score >= .7) return 'C'
  else if(score >= .6) return 'D'
  
}

// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"


function ensureQuestion(s) {
  // Code here
  if(s.includes('?')) return s 
  else return s +'?' // STRING CONCATINATION
}

// Another solution

function ensureQuestion(s) {
  if(s.includes('?')) return s 
  else return `${s}?`   // TEMPLATE LITERAL
}

// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) { 

  // put your code here

   if(num === 1) return 'Sunday'
  else if(num === 2) return 'Monday'
  else if(num === 3) return 'Tuesday'
  else if(num === 4) return 'Wednesday'
  else if(num === 5) return 'Thursday'
  else if(num === 6) return 'Friday'
  else if(num === 7) return 'Saturday'
  else return 'Wrong, please enter a number between 1 and 7'

}

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"