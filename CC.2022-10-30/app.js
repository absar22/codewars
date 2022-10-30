// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  //your code here
let newString = ''
for(let i = 1; i <= num; i++ ){
  newString += i.toString() + ' sheep...'
}
  return newString
}
console.log(countSheep(1))

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  // Code here
  let sum = s1 + s2 + s3
  let average = sum/getGrade.length
  if(average >= 90){
    return 'A'
  }else if (average >= 80){
    return 'B'
  }else if (average >= 70){
    return 'C'
  }else if (average >= 60){
    return 'D'
  }else {
    return 'F'
  }
  
}
console.log(getGrade(70,70,100))