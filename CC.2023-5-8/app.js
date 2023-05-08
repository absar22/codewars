// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.


function pickIt(arr){
  var odd=[],even=[];
  //coding here
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i])
    }else {
      odd.push(arr[i])
    }
  }
  
  return [odd,even];
}



// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".