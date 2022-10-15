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