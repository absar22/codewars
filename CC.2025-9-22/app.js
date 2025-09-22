// You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy".
//  For Freud, the answer was quite different...

// In the society he lived in, people - women in particular - had to repress their sexual needs and desires. 
// This was simply how the society was at the time. Freud then wanted to study the illnesses created by this,
//  and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, 
// Freud being the father of psychoanalysis.

// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to,
//  and explained by sex.

// In this kata, the function will take a string as its argument,
//  and return a string with every word replaced by the explanation to everything, according to Freud. 
// Note that an empty string, or no arguments, should return an empty string.

function toFreud(string) {
 if (!string) return ""
return string.split(' ').map(() => 'sex').join(' ')
}


// You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)

function describeAge(age) {
 return `You're a(n) ${age<=12?'kid':age<=17?'teenager':age<=64?'adult':'elderly'}`

}


// Your task
// Create a package.json configuration and assign it to the configuration constant so it can be tested.

// To pass the kata you need only the least that a real package file would require.

// Notes
// the kata version validation doesn't handle all cases and isn't 100% accurate, so don't try to be too fancy, stick to with the simple
// to simplify the license validation this kata only allows the following
// ISC
// MIT
// UNLICENSED
// SEE LICENSE IN filename
const configuration = {
  "name": "your-pack-name",
  "version": "1.0.0"
};

module.exports = configuration

// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. 
// Fix the function to make it return 32 without changing the number or the operators.

const orderOperations =  () => (2 + 2) * (2 + 2) * 2

// You are creating an "Escape the room" game. 
// The first step is to create a hash table ( dict in Python) called rooms that contains all of the rooms of the game.
//  There should be at least 3 rooms inside it, each room being a hash table with at least 3 properties (e.g. name, description, completed).

// Add rooms here
var rooms = {
 rooms1: {
   name: 'alpha',
   discription: 'male',
   completed: false
 },
   rooms2: {
   name: 'beta',
   discription: 'male',
   completed: false
 },
   rooms3: {
   name: 'gamma',
   discription: 'male',
   completed: true
 },
}