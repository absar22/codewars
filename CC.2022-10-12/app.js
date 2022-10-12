// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){
  let square  = numbers.map(x => x = Math.pow(x,2))
  let sum = square.reduce((acc, c) => acc + c, 0)
  
  return sum
   
 }

 console.log(squareSum([2,2,5,6]))


//  Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  return String(n).split('').reverse('').map(x => Number(x))
}

console.log(digitize('1234'))

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]


function monkeyCount(n) {
  let nums = []
  for(let i = 1 ; i < n+1; i ++){
    nums.push(i)
  }
   return nums
 }

 console.log(monkeyCount(10))

 