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