//  create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

function countLettersAndDigits(input) {
 input = input.toLowerCase()
  let count = 0
  for(let i =0; i < input.length; i++){
    if((input[i] >= 'a' && input[i] <= 'z') || (input[i] >= '0' && input[i] <= '9')){
      count ++
    }
  }
  return count

}


//Your task is to create a function that takes a string of two words, separated by a space: 
// words and returns a spoonerism of those words in a string, as in the above example.
//  A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. 
// Though spoonerisms are about letters in words in the domain of written and spoken language, 
// numbers are included in the inputs for the random test cases and they require no special treatment.
function spoonerize(words) {
    let val1 =  words.split(' ')[0]
  let val2 =  words.split(' ')[1]
  let swap1 =  val1[0] = val2[0] 
  let swap2 =  val1[0]
  return swap1 + val1.slice(1) + ' ' + swap2 + val2.slice(1)
}