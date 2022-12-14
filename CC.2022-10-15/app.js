// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.filter(number => number> 0).reduce((acc, c) => acc + c, 0)
  }
  
  console.log(positiveSum([1,2,3,4, -4]))

//   Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  if(arrayOfSheep === null || arrayOfSheep === undefined){
    return 0
  }
  let count = 0
 for(let i = 0; i < arrayOfSheep.length; i++){
   if(arrayOfSheep[i] === true){
     count ++
   } else{
     arrayOfSheep[i] = 0
   }
 }
  return count
}
console.log(countSheeps([true,  true,  true,  false,
     true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
     false, false, true,  true]))


//      Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let z = [];
  for(let i = 1; i<= n; i++){
    z.push(x * i)
  }

  return z;
}

console.log(countBy(3,10))


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
  let sum = 0
  for(let i = 0; i< x.length; i++){
   if(typeof x[i] === 'number'){
     sum += x[i]
   }else if (typeof x[i] === 'string'){
     x[i] = Number(x[i])
     sum += x[i]
   }
  }
   return sum
 }
 
 console.log(sumMix([1,'2',3]))
 
