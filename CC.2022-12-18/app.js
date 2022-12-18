// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.



function feast(beast, dish) {
  //your function here
  if(beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1])return true
    else return false
  }



  
  // Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

  // Hint for R users:
  
  // The length of string is not always the same as the number of characters
  // For example: (Input1, Input2) --> output
  
  // ("1", "22") --> "1221"
  // ("22", "1") --> "1221"