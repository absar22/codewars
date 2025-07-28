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