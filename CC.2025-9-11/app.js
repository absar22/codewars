// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails.
//  To help her, you must correct the broken function to make sure that the second argument (tail), 
// is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.
function correctTail(bod, tail) {
  
  let sub = bod.substr(bod.length - tail.length)
  
  if (sub === tail){ 
    return true
  }
  else {
    return false
  }
}

// 
function correctTail(bod, tail) {
  return bod.endsWith(tail)
}


// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

function howManyDalmatians(number) 
  
{ 
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
 
    var respond = number <= 10 ? dogs[0] :
                number <= 50 ? dogs[1] :
                number < 101 ? dogs[2] : dogs[3]
return respond
}


// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
  let distance = dist * 100;
  return (numPill - 1) * distance + (numPill > 2 ? (numPill - 2) * width : 0);
}


// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.

// Examples
// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]

function generateRange(min, max, step){
 let arr = []
 for(let i = min; i <= max; i+=step){
   arr.push(i)
 }
  return arr
}