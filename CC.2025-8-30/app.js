// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// Examples
// // These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
// Happy hacking!

function aliasGen(first, last){
   let firstValue = first[0].toUpperCase()
   let lastValue =  last[0].toUpperCase()
   
   if(!firstName[firstValue] || !surname[lastValue]){
     return "Your name must start with a letter from A - Z."
   }
  return firstName[firstValue] + " " + surname[lastValue]
}


// You're on your way to the market when you hear beautiful music coming from a nearby street performer. 
// The notes come together like you wouln't believe as the musician puts together patterns of tunes.
//  As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that,
//   it dawns on you that you have been watching the musician for some 10 odd minutes. You ask,
//    "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era!
//  The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era;
//  B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". 
// Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster.
//  Note that the phrase can also be written as
//   "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.

function isLochNessMonster(s) {

  return (s.includes("3.50") || s.includes("three fifty") || s.includes("tree fiddy")) 
}