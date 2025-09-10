// The goal of this exercise is to convert a string to a new string where each character in the new string is
//  "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. 
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    
        const lowerWord = word.toLowerCase()
        return lowerWord
       .split('')
       .map(char => lowerWord.indexOf(char) === lowerWord.lastIndexOf(char)? '(' : ')')
       .join('')

}



// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  text = text.toLowerCase()
  let val = []
  for(let i = 0; i < text.length; i++){
    let char = text[i]
    if(char >= 'a' && char <= 'z'){
         val.push(char.charCodeAt(0) - 96)
    }
    
 
  }
  return val.join(' ')
  
}



// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
return str
  .replaceAll('-', ('_'))
  .split('_')
  .map((e,i) => i === 0 ? e : e[0].toUpperCase()+e.slice(1))
  .join('')
}


// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

String.prototype.camelCase=function(){

 return this.split(' ').map(e => e.charAt(0).toUpperCase()+e.slice(1)).join('')
  
}


// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
 let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"]
 let val = string.toLowerCase()
  for(let i =0 ; i < arr.length; i++){
    if(!val.includes(arr[i])){
      return false
    }
  }
  return true
}

// AnotherWay
function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerString = string.toLowerCase();
    return alphabet.split('').every(letter => lowerString.includes(letter));
}