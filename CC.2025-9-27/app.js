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

// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn
function pattern(n){
 var output="";
  for(let i = 1; i <= n ; i++){
    output += String(i).repeat(i)+(i < n ? '\n' : "")
  }
 return output;
}