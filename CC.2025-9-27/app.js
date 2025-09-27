// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.
Math.roundTo = function (number, precision) {
  return +number.toFixed(precision)
}

// Task
// Given a number, determine if it is tidy or not.
function tidyNumber(n){
   n =  n.toString().split('').map(Number)
  for(let i = 0; i < n.length; i ++){
    if(n[i] > n[i+1]){
      return  false
    }
  }
  return true
}