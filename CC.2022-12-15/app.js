// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// PREP

// P => we have string as  a paramenter
// R => We want to remove every vowel lettere form the string

function disemvowel(str) {
  // Declare a variable thar we will remove
  let vowel = 'aeiouAEIOU'
  // Place where we will put our result
  let newString = ''

  for(let char of str){
    if(!vowel.includes(char)){
      newString += char
    }
  }
  return newString
}


// Example 
console.log(disemvowel('This website is for losers LOL!'), 'Ths wbst s fr lsrs LL!')