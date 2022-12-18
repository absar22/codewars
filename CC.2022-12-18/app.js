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



  function solution(a, b){
    // your code here
    if(a.length > b.length){
      return b + a + b
    }else {
      return a + b + a
    }
    
    
  }



//   This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0


function strCount(str, letter){  
  //code here
  let count = 0
  for(let i = 0;i < str.length; i++){
    if(str[i] === letter){
      count ++
    }
  }
  return count 
}

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.


function capitalizeWord(word) {
  let value =   word[0].toUpperCase() + word.slice(1)
   return value;
   
 }

//  Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().