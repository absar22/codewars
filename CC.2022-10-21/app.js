// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  //your code here
  if(number > 0){
    return -number
  }else {
    return number * -1
  }
}

console.log(opposite(5), -5)
console.log(opposite(-5), 5)

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return (number % 2 ===0 ? 'Even' : 'Odd'  )
  
}

console.log(even_or_odd(4))
