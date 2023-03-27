// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
  let result = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      result += "1";
    } else {
      result += "0";
    }
  }
  return result;
}



// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


function pipeFix(numbers){
  let min = Math.min(...numbers)
  let max = Math.max(...numbers)
  let result = []
  for(let i = min; i <= max; i++){
    result.push(i)
  }
   return result
 }


//  Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// Good luck!

function howManyDalmatians(number) {
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number === 101 ? dogs[3] : dogs[2]));
  return respond;
}

console.log(howManyDalmatians(5)); // Output: "Hardly any"

