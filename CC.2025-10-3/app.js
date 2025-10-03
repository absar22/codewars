// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

function divisibleByThree(str){
let sum = str.split('').map(Number).reduce((a,b)=>a+b,0) 
return sum / 3 === Math.floor(sum / 3)
}