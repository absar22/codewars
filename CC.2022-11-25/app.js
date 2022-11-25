// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  // ...

  let value = numbers.split(' ').sort((a,b) => b - a)
  return [value[0], value[value.length-1]].join(' ')
 

}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){
  //...
    value = String(n).split('').sort((a,b) => b-a)
  return Number(value.join(''))
}


// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'


function combineNames(firstName,lastName){
  return  firstName+ ' ' .concat(lastName) 
} 
console.log(combineNames('Absar','Ahmad'))


// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!