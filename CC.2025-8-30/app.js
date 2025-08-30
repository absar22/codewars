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

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual.
//  Some days he climbs more stairs than others depending on the number of students he must train in the morning. 
// He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. 
// You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 
// 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 
// 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.

function stairsIn20(s){

  return s.flat().reduce((acc,cv) => acc + cv,0) * 20
}

// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. 
// Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

function all( arr, fun ){

   for(let i = 0;i < arr.length;i++){
     if(!fun(arr[i])){
       return false
     }
   }
  return true
}

// You are trying to put a hash in ruby or an object in javascript or java into an array, 
// but it always returns error, solve it and keep it as simple as possible!

items = []
let obj =  {a: "b", c: "d"}

items.push(obj)