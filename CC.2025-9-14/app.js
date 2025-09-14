// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function generateHashtag(str) {
  str = str.trim();
  if (str.length === 0) return false;

  let value = '#' + str
    .split(' ')
    .filter(word => word !== "") 
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('');

  return value.length > 140 ? false : value;
}

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
  let arr = []
  for(let i = 0; i < nFloors; i++){
    let stars = '*'.repeat(2 * i + 1)
    let spaces = ' '.repeat(nFloors - i - 1)
    arr.push(spaces+stars+spaces)
  }
  return arr
}