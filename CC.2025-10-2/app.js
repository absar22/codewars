//  create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

function countLettersAndDigits(input) {
 input = input.toLowerCase()
  let count = 0
  for(let i =0; i < input.length; i++){
    if((input[i] >= 'a' && input[i] <= 'z') || (input[i] >= '0' && input[i] <= '9')){
      count ++
    }
  }
  return count

}


//Your task is to create a function that takes a string of two words, separated by a space: 
// words and returns a spoonerism of those words in a string, as in the above example.
//  A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. 
// Though spoonerisms are about letters in words in the domain of written and spoken language, 
// numbers are included in the inputs for the random test cases and they require no special treatment.
function spoonerize(words) {
    let val1 =  words.split(' ')[0]
  let val2 =  words.split(' ')[1]
  let swap1 =  val1[0] = val2[0] 
  let swap2 =  val1[0]
  return swap1 + val1.slice(1) + ' ' + swap2 + val2.slice(1)
}


// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"

function makePassword(phrase) {
   let password = phrase.split(' ').map(word => word[0]).join('')
   return password.replaceAll("i", "1")
    .replaceAll("I", "1")
    .replaceAll("o", "0")
    .replaceAll("O", "0")
    .replaceAll("s", "5")
    .replaceAll("S", "5")
}

// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`
const helloWorld = () => {
 return String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33)
}

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

function arithmetic(a, b, operator){
  const obj = {
   'add' : a + b,
   'subtract' : a - b,
   'multiply' : a * b,
   'divide' : a / b
 }
    return obj[operator]
}

// Your task is to write function factorial.
function factorial(n){
 let res = 1
 for(let i = 1 ; i <= n; i ++){
   res *= i
 }
  return res
}