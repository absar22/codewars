
                                             // Codewars kata 8kyu

// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]

Array.prototype.filter = function (func) {
  //nothing here, you will feel pretty awesome to write down by yourself
  //have fun :)
  let result = []
  for(let i = 0; i < this.length;i++){
    if (func(this[i], i, this)){
      result.push(this[i])
    }
  }
  return result
}

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

const multipleOfIndex = arr => arr.filter((e,i)=> e === 0 || e % i === 0)


// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL



function array(string) {
  // TODO
  let stringToArr = string.split(',')
  if(stringToArr.length <= 2){
    return null
  }
  return stringToArr.slice(1,-1).join(' ')
}


// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function well(x){
  let count = 0
  for(let i = 0 ; i < x.length ; i++){
    if(x[i] === 'good')
      count ++
  }
  
  if(count === 0){
    return 'Fail!'
  }else if(count <= 2){
    return 'Publish!'
  }else {
    return 'I smell a series!'
  }
} 



// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
   for(let i = queue.length -1 ; i >= 0 ; i--){
     if(queue[i] === 'wolf'){
       if(i === queue.length-1){
         return `Pls go away and stop eating my sheep`
       }else {
         let sheepInDanger = queue.length - 1 - i
         return `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!`
       }
     }
   }
}

// Refractored

function warnTheSheep(queue) {
   let changedIndexPosition = queue.reverse().indexOf('wolf')
    return changedIndexPosition === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${changedIndexPosition}! You are about to be eaten by a wolf!`
}