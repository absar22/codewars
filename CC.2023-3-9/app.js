// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
  // P given a string both in uppercase and lowercase
  // R capitalize only vowels string
  // E 
  // P
     let vowels = 'aeiouAEIOU'
     let result = ''
     for (let i = 0; i < string.length; i++){
       if(vowels.includes(string[i])){
         result += string[i].toUpperCase()
       }else {
         result += string[i]
       }
     }
     return result
  }