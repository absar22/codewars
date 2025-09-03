// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

function solve(arr){  
  return arr.map(word => {
    let count = 0
    for(let i =0 ; i < word.length;i++){
      let position = word[i].toLowerCase().charCodeAt(0) - 96 
      if(position === i + 1){
        count ++
      }
    }
    return count
  })
};


// Write a program to determine if a string contains only unique characters.
//  Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive,
//  e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str){
  let arr = []
  for(let i = 0; i < str.length;i++){
    let char = str[i]
    if(arr.includes(char)){
      return false
    }
    arr.push(char)
  }
  return true
}