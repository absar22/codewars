// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails.
//  To help her, you must correct the broken function to make sure that the second argument (tail), 
// is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.
function correctTail(bod, tail) {
  
  let sub = bod.substr(bod.length - tail.length)
  
  if (sub === tail){ 
    return true
  }
  else {
    return false
  }
}

// 
function correctTail(bod, tail) {
  return bod.endsWith(tail)
}


// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

function howManyDalmatians(number) 
  
{ 
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
 
    var respond = number <= 10 ? dogs[0] :
                number <= 50 ? dogs[1] :
                number < 101 ? dogs[2] : dogs[3]
return respond
}


// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
  let distance = dist * 100;
  return (numPill - 1) * distance + (numPill > 2 ? (numPill - 2) * width : 0);
}


// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.

// Examples
// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]

function generateRange(min, max, step){
 let arr = []
 for(let i = min; i <= max; i+=step){
   arr.push(i)
 }
  return arr
}


// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// Helper function 
function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

function sameCase(a, b) {
 if(!isLetter(a) || !isLetter(b))  return -1
  
    if ((a === a.toUpperCase() && b === b.toUpperCase()) ||
      (a === a.toLowerCase() && b === b.toLowerCase())) {
    return 1;
  }
return 0
}


// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
const include = (arr, item) =>  arr.includes(item)


// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)

function derive(coefficient,exponent) {
  return `${coefficient*exponent}x^${exponent-1}`
}

// your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)

function weatherInfo (temp) {
  var c =  convertToCelsius(temp)
  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9)
  return celsius
}


// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}


// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
//   const res =  //regex here/.test(username)
//   return res;
 if(username.length < 4 ||username.length > 16) return false
  for(let i = 0 ; i < username.length; i++){
    let ch = username[i]
    if(!(ch >= 'a' && ch <= 'z') && !(ch >= '0' && ch <= '9') && ch !== '_'){
      return false
    }
  }
  return true
}