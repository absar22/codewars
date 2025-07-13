// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
  let vowels = 'aeiouAEIOU'
  return str.split('').filter(char => !vowels.includes(char)).join('')
  
  
}

// one liner solution

const disemvowel = str => str.split('').filter(e =>  !'aeiouAEIOU'.includes(e)).join('')


// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
  //Code goes here!
    return s.length % 2 === 0 ?  s[Math.floor(s.length/2) -1] + s[Math.floor(s.length/2)] :  s[Math.floor(s.length/2)]
}

// Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  //...
  str = str.toLowerCase()
  for(let i = 0; i < str.length;i++){
    if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
      return false
    }
  }
  return true
}

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"