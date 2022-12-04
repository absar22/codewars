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


