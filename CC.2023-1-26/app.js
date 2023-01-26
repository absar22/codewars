// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1




function sameCase(a, b){
  if(a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()){
    return -1
  }
  else if ((a === a.toUpperCase() && b === b.toUpperCase()) ||
           (a === a.toLowerCase() && b === b.toLowerCase())){
    return 1
  }
   
else {
  return 0
}
  }



  // Return the type of the sum of the two arguments

  function typeOfSum(a, b) {
    // good luck
    
    return typeof (a + b)
  }



//   You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!

// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

// You begin with writing a generic Ship class / struct:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);
// Task
// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt
// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false
// Good luck and may you find GOOOLD!



function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
   this.isWorthIt = function(){
     // remove weight of crew
     let draftWithoutCrew = this.draft - (this.crew * 1.5)
      // check if draft is more than 20
     return draftWithoutCrew > 20
   }
 }

 var titanic = new Ship(15 ,10)
 console.log(titanic.isWorthIt())



//  Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

function first(arr, n = 1 ) {
  if(n === 0){
    return []
  } else {
    return arr.slice(0 , n)
  }
  }