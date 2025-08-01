// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const reverseWords = str =>  str.split(' ').map(e => e.split('').reverse().join('')).join(' ')


// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna){
  let result = ''
  for(let i = 0 ; i < dna.length ; i++){
    let char = dna[i]
    if(char === 'A'){
      result += 'T'
    }else if (char === 'T'){
      result += 'A'
    }else if (char === 'C'){
      result += 'G'
    }else if (char === 'G'){
      result += 'C'
    }
  }
  return result
}



// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.


function likes(names) {
  // TODO
  if(names.length === 0) {
    return "no one likes this"
  }else if (names.length === 1) {
    return `${names} likes this`
  }else if (names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  }else if (names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }else  {
    let result = names.length - 2
    return `${names[0]}, ${names[1]} and ${result} others like this`
  }
}



// Your task is to find the nearest square number of a positive integer n. In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// For example, if n = 111, then the nearest square number equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If n is already a perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)

// Check my other katas:

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)),2)