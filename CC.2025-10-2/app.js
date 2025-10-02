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