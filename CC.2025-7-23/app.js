// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

function filterString(value) {
  //Complete this function :)
  return +value.split('').filter(c => !isNaN(c) && c !== '').join('')
}