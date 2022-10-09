// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(array) {
  return array.filter((x) => x > 0).reduce((acc, c) => acc + c, 0);
}

console.log(positiveSum([1, 2, 3, -4, -5]) ,6);

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("889177 bksbcksbkd d oijsdhoiw9923jbkjfd"));

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  return name
    .split(" ")
    .map((x) => x[0])
    .join(".")
    .toUpperCase();
}

console.log(abbrevName("Absar Ahmad"));

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "world", "this", "is", "great"]));


// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
 let str = ''
 for(let i = 0; i< n ; i++){
  str += s
 }
 return str
}

console.log(repeatStr(6, 'Hello'))

//  Another solution with less complication  

function repeatStr(n,s){
  return s.repeat(n)
}