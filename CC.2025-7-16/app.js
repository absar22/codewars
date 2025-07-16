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