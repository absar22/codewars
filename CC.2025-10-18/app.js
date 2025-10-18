// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

// Examples
// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -->  "5"

function lottery(str){
   let nums =  str.split('').filter(letter => !isNaN(letter))
   let results = nums.filter((item, index) => nums.indexOf(item) === index).join('')
  return results ? results : 'One more run!'
}

// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, or if the letter occurs only once in the string, -1 should be returned.

// Examples:

// for inputs  "Hello world!!!", 'l'  ->  return 3
// for inputs  "Hello world!!!", 'A'  ->  return -1
// Good luck ;) And don't forget to rate this kata if you liked it.

function secondSymbol(s, symbol) {
 let firstIndex = s.indexOf(symbol)
 return s.indexOf(symbol, firstIndex + 1)
}

// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, 
// where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

function nthChar(words){
  let results = ''
for(let i = 0; i < words.length; i++){
  results += words[i][i]
}
  return results
}
