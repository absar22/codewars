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