// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  //your code here
  return `Hello, ${name} how are you doing today?`
}


// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function findAverage(array) {
  // your code here
//   return 0;
  
  
  let sum = 0
  for(let i = 0; i< array.length; i++){
    sum += array[i]
  }
  if(array.length === 0){
    return 0
  } else {
    return sum/array.length
  }
}