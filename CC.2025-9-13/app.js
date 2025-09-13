// Your friend advised you to see a new performance in the most popular theater in the city. 
// He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. 
// It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. 
// All you need to do is climb over your seat and make your way to the exit.

// The main problem is your shyness: you're afraid that you'll end up blocking the view
//  (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left.
//  To gain some courage,
//  you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

// Given the total number of rows and columns in the theater (nRows and nCols, respectively),
//  and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left,
//  assuming all seats are occupied.

// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be 96.

// Here is what the theater looks like:

function seatsInTheater(nCols, nRows, col, row) {
  //coding and coding..
  return (nCols - col + 1) * (nRows - row)
  
}


// Implement String#digit? (in Java StringUtils.isDigit(String)),
//  which should return true if given object is a single digit (0-9), false otherwise.

String.prototype.digit = function(char) {
  return this >= '0' && this <= '9' && this.length === 1
};


// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.
//  For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

const remove  = string =>  `${string.replaceAll('!', '')}!`

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

function validateHello(greetings) {
  
 let arr = ['hello','ciao','salut','hallo','hola','ahoj','czesc']
 for(let i = 0; i < arr.length;i++){
   if(greetings.toLowerCase().includes(arr[i])) return true
 }
  return false
}

// You'll be given a string, and have to return the sum of all characters as an int.
//  The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291
const uniTotal = string  =>  string.split('').map(x => x.charCodeAt(0)).reduce((a,b) => a + b, 0)



// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

// If the winner is George Saint Pierre he will obviously say:

// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:

// "I'd like to take this chance to apologize.. To absolutely NOBODY!"

function quote(fighter) {
 if(fighter.toLowerCase() === 'george saint pierre') return "I am not impressed by your performance."
  else if (fighter.toLowerCase() === 'conor mcgregor') return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
};


// Write a function that takes in a numeric code of any length. 
// The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

function validateCode (code) {
 code = code.toString()
 return code.startsWith('1') || code.startsWith('2') || code.startsWith('3')
}



// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.
function calculateTip(amount, rating) {
      switch(rating.toLowerCase()){
     case 'terrible':
       return 0
     case 'poor':
       return Math.ceil(amount * (5/100))
     case 'good':
       return Math.ceil(amount * (10/100))
     case 'great':
       return Math.ceil(amount * (15/100))
     case 'excellent':
       return Math.ceil(amount * (20/100))
     default:
       return "Rating not recognised"
            
   }
}