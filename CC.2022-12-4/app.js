// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"



// Answer 


//PREP
// Parameter => We take strings as a parameter , it can be uppercase or lowercase 
// Return => we replace any vowel 'a e i o u' (both uppercase or lowercase) with '!' 

// Example 
// ("Hi!") === "H!!"
// ("!Hi! Hi!") === "!H!! H!!"
// ("aeiou") === "!!!!!"
// ("ABCDE") === "!BCD!"
function replace(s){
  // We can use replace method here
 return s.replace(/[aeiou]/gi, '!')  // we use g for => global search & i for => caseSensitvity
    
  
}

// Another way to solve 
function replace(s){
  let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let result = ''
  for(value of s){
    if(vowel.includes(value)){
      result += '!'
    }
    else {
      result += value
    }
  }
   return result
 }
 console.log(replace('aeiou'))


//  This is the first step to understanding FizzBuzz.

//  Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
 
//  Your expected output is an array of positive integers from 1 to n (inclusive).
 
//  Your job is to write an algorithm that gets you from the input to the output.


// SOLUTION


// PREP
// Parameter => It will take only +ve integers 
// Return => we need to return an Array populated with arguments
// Example 
  1 === [1]
  2 === [1,2]
  3 === [1.2.3]
  4 === [1,2,3,4]

  function preFizz(n) {
    // Let declare a variable were we will store our result 
    let result = []
    // We will loop through the n parameter
    for(let i = 1; i <= n; i ++){
      // Every time the loop runs we push our value to result
      result.push(i)
    }
      return result
    }


//     Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.


function animal(obj){

  return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.'
}
