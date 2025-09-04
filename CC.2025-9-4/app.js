// You will be given a string featuring a cat 'C' and a mouse 'm'. 
// The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

// You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

// "C.....m" returns "Escaped!" <-- more than three characters between

// "C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.

function catMouse(x){
 let mousePos = x.indexOf('m')
 let catPos = x.indexOf('C')
 
 let distance = mousePos - catPos - 1
 return distance > 3 ? 'Escaped!' : 'Caught!'
}

// The vowel substrings in the word codewarriors are o,e,a,io. 
// The longest of these has a length of 2. 
// Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces,
//  return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// If you like substring Katas, please try:

function solve(s){
 let vowels = 'aeiou'
 let currentVal = 0
 let maxVal = 0
 for(let char of s.toLowerCase()){
   if(vowels.includes(char)){
     currentVal++
     if(currentVal > maxVal) maxVal = currentVal
   }else{
     currentVal = 0
   }
 }
  return maxVal
 
} 



// Complete the function which takes a non-zero integer as its argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

// If one of the condition above is true and the integer is even, add "Script" to the end of the string.

// If none of the condition is true, return the string "mocha_missing!"

// Examples
// 1   -->  "mocha_missing!"
// 3   -->  "Java"
// 6   -->  "JavaScript"
// 12  -->  "CoffeeScript"


function caffeineBuzz(n) {
  if (n % 3 === 0 && n % 4 === 0) {
    return n % 2 === 0 ? "CoffeeScript" : "Coffee";
  } else if (n % 3 === 0) {
    return n % 2 === 0 ? "JavaScript" : "Java";
  } else {
    return "mocha_missing!";
  }
}
