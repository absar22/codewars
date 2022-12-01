// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

function check(a,x){
  return a.includes(x)
};

// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

// Any solution is acceptable!

const isReallyNaN = (val) => {
  // return isNaN(val);  // wasn't working as planned :-(
//   return true || false;
 return Number.isNaN(val)
};


// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.


function saleHotdogs(n){
  if(n < 5) return 100 * n
  else if ((n >=5) && (n < 10)) return 95 * n
  else  return 90 * n
}



// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

function unusualFive() {
  let value = 'APPLE'
  return value.length
}


// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truth-ish, func1 should be called, otherwise call the func2.

// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.


function _if(bool, func1, func2) {
  // ...
  return bool ? func1() : func2() 
}

// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.



for(let i = 1; i <= 10; i++){
  console.log(i)
}

// When it's done, improve it so that the number of turns is given by the user.

let turns = prompt('How many turns should we do?', 0)

for(let i = 1; i <= turns; i++){
  console.log(i)
}

// Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)
