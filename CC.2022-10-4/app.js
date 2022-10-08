// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

<<<<<<< HEAD
// P:  Are you given empty array? or undefined or null ? what then? Are you always given digits
// R: whatever the number was , its now split in an array and the order of the array is reversed
// E: If we were given 35231 => [1,3,2,5,3]
//                     4567 => [7,6,5,4]
//                     undefined => NaN
// P: make a function that takes in a number
function digitize(n) {
  // make number a string and split that 
    let newArray = n.toString().split('').reverse()
  // reverse array
   return Number(newArray)
  // make it array and return
}
console.log(digitize(330),[0,3,3])
// Cant Do it This way , will have to use map. lol
=======
>>>>>>> 2ed705fdb0a4c24f5797da15ce977ed68095adc4
