// The input will be an array of dictionaries.

// Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

// Example
// Input:
// List = [
//         {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//         {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//        ]

// Output:
// 'Vatsan took his dog for a spin'
function sentence(arrayOfObjects) {
  let val = []

  for (let obj of arrayOfObjects) {
    for (let key in obj) {
      val.push([+key, obj[key]]) 
    }
  }

  val.sort((a, b) => a[0] - b[0]) 

  let results = ''
  for (let i = 0; i < val.length; i++) {
    results += val[i][1] + ' ' 
  }

  return results.trim()
}

// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

function dotCalculator(equation) {
  let leftSide = equation.split(' ')[0].length
    let symbol = equation.split(' ')[1]
    let rightSide = equation.split(' ')[2].length
    let results 
    if(symbol === '+') results =  leftSide + rightSide
    else if(symbol === '-') results = leftSide - rightSide
    else if(symbol === '*') results = leftSide * rightSide
    else if(symbol === '//') results = leftSide / rightSide
  return '.'.repeat(results)
}