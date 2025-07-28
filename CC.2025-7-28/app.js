// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s){

  let vowel = 'aeiouAEIOU'
  let total = ''
  for(let i = 0; i < s.length;i++){
    if(vowel.includes(s[i])){
      total += '1'
    }else {
      total += '0'
    }
  }
  return total
}


// Another way to solve
function vowelOne(s){
let vowels = 'aeiouAEIOU'
return s.split('').map(c => vowels.includes(c) ? '1' : '0').join('')
}



// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.



function last(x){
   return x.split(' ').sort((a,b)=>{
     const lastA = a[a.length -1]
     const lastB = b[b.length -1]
     return lastA.localeCompare(lastB)
   })
}


// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
   let vowels = 'aeiou'
   let result = ''
   for(let i = 0; i < string.length;i++){
     let char = string[i]
     if(vowels.includes(char)){
       result += char.toUpperCase()
     }else {
       result += char
     }
   }
  return result
}