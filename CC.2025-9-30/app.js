// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. 
// He wants to replace all the rotten pieces of fruit with fresh ones.
//  For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. 
// Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings
//  where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

function removeRotten(bagOfFruits) {
  if(!Array.isArray(bagOfFruits)) return []
    return  bagOfFruits.map(fruit => 
        fruit.toLowerCase().replace('rotten', '')
    );
}

// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.
function isItLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
}

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"
function calculate(str) {
  //your code here...
  let val  = str
    .replaceAll('plus', '+')
    .replaceAll('minus', '-')
 return eval(val).toString()
}