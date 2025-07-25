// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.
// Examples
// ("--++--", "++--++") ➞ "000000"

// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"

// ("-++-", "-+-+") ➞ "-+00"
// Notes
// The two strings will be the same length.

function neutralise(s1, s2) {
  let newStr = ''
  for(let i = 0; i <s1.length;i++){
    if(s1[i] === s2[i]){
      newStr += s1[i]
    }else{
      newStr += '0'
    }
  }
  return newStr
}

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters (string) {
  let polishedAlphabet = {
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z'
  }
  let newStr = ''
  for(let i = 0; i < string.length;i++){
    let char = string[i]
    newStr += polishedAlphabet[char] || char
  }
  return newStr
}



// Another solution
var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correct(string){
  return string.split('').map((char)=> polishLetters[char] || char).join('')
}


// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

function alphabetWar(fight)
{
    let leftSide = {
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1
  }

  let rightSide = {
    'm': 4,
    'q': 3,
    'd': 2,
    'z': 1
  }
  
  let leftScore = 0
  let rightScore = 0
  
  for(let i = 0; i < fight.length;i++){
    let char = fight[i]
    if(leftSide[char]){
      leftScore += leftSide[char]
    }else if (rightSide[char]){
      rightScore += rightSide[char]
    }
  }
  
  if(leftScore > rightScore){
    return 'Left side wins!'
  }else if (leftScore < rightScore){
    return 'Right side wins!'
  }else {
    return "Let's fight again!"
  }
  

}

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

//     Correct answer    |    Student's answer   |   Result         
//  ---------------------|-----------------------|-----------
//  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

function checkExam(array1, array2) {
 // good luck
  let result = 0
  for(let i = 0; i < array1.length; i++){
   if(array2[i] === ''){
      result += 0
   }else if (array1[i] === array2[i]){
     result += 4
   }else{
     result -= 1
   } 

  }
  
  if(result < 0 ){
    return 0
  }
  return result
}

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"

const removeUrlAnchor = url =>  url.split('#')[0]


// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// const digits = n => n.toString().length;



// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  return array.reduce((acc,c) => {
    return acc.toString().length >= c.toString().length ? acc : c
  })
}


// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
let numbers =  x
   .filter(x => typeof x === 'number')
   .reduce((a,b) => a + b,0)
let stringsConvertedInNumber =  x
    .filter(x => typeof x === 'string')
    .map(x => Number(x))
    .reduce((a,b) => a + b, 0)
return numbers - stringsConvertedInNumber
}


// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

function solution(pairs){
  // TODO: complete
  let result = []
  for(let key in pairs){
    result.push(key + " = " + pairs[key])
  }
  return result.join(',')
} 