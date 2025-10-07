// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

// Examples
// "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
// "h-o" ➞ "hijklmno"
// "Q-Z" ➞ "QRSTUVWXYZ"
// "J-J" ➞ "J"

function gimmeTheLetters(sp) {
  let results = ''
  let val = sp.split('-')
  let start = val[0].charCodeAt(0)
  let end = val[1].charCodeAt(0)
  for(let i = start; i <= end; i++){
    results += String.fromCharCode(i)
  }
  return results
}


// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.

// Examples
// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"
function longestWord(stringOfWords) {
  let val = stringOfWords.split(' ')
  let longest = ''
  for(let i = 0 ; i < val.length; i++){
    if(val[i].length >= longest.length){
      longest = val[i]
    }
  }
  return longest
}