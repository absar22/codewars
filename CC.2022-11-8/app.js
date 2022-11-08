// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0
  for(let i = 0; i < marks.length; i++){
    sum += marks[i]
  }
  let average = sum/marks.length
  return Math.floor(average)
}

// Another way to solve this question
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor( marks.reduce((acc,c) => acc + c, 0)/marks.length)
}


// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
  if((n % x ===0) && (n% y === 0)){
    return true
  }else {
    return false
  }
}
console.log(isDivisible(12,3,4))

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
  
  //your code here!
if(current === 'green') return 'yellow'
  else if (current === 'yellow') return 'red'
  else if (current === 'red') return 'green'
}

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  // Implement me
  
//   return name;
  
  if(name[0] === 'r' || name[0] === 'R' ){
    return name + ' plays banjo'
  }else {
    return name + ` does not play banjo`
  }
}
console.log( areYouPlayingBanjo('Ringo'))


// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true


function setAlarm(employed, vacation){
  if(employed === true && vacation === true) return false
  else if (employed === false && vacation === true) return false
  else if (employed === true && vacation === false) return true
  else if (employed === false && vacation === false) return false

}
console.log(setAlarm(true,true))


// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"


