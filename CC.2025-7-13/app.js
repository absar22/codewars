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