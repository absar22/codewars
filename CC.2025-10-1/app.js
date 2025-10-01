// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true

function containAllRots(str, arr) {
    if(str === '') return true
  for(let i = 0; i < str.length; i++){
    let rotation = str.slice(i) + str.slice(0,i)
    if(!arr.includes(rotation)){
      return false
    }
  }
  return true
}


// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.

// More examples in the tests cases.

// Good luck!

function solve(a, b) {
  let part1 = a.split('').filter(ch => !b.includes(ch)).join('');
  let part2 = b.split('').filter(ch => !a.includes(ch)).join('');
  return part1 + part2;
}


// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

function solve(arr) {
  return arr.filter((char,index,arr) => arr.lastIndexOf(char) === index)
}


// your are given a string. You must replace any occurence of the sequence coverage by covfefe, however,
//  if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.
function covfefe(str){
    if(str.includes('coverage')){
    return str.replaceAll('coverage','covfefe')
  }
  return str + ' covfefe'
}


// In this Kata, you will be given a string that has lowercase letters and numbers.
//  Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

function solve(s) {
let currentNum = ''
let max = ''
for(let char of s){ 
  if(char >= '0' && char <= '9'){
    currentNum += char
  }else{
    max = Math.max(max, +currentNum || 0)
    currentNum = ''
  }
}
  return Math.max(max, +currentNum || 0)
};


// Coding in function cutCube. function accept 2 parameter: volume and n. volume is the volume of a cube.
//  If we cut the cube into n block.
//  please determine whether the length of the cube is an integer. return true or false.

function cutCube(volume, n) {
 
  let bigSide = Math.cbrt(volume)

  if (bigSide % 1 !== 0) return false
  if (volume % n !== 0) return false
  let smallVolume = volume / n
  let smallSide = Math.cbrt(smallVolume)
  return smallSide % 1 === 0
}


// AddExtra method adds a new item to the list and returns the list. The new item can be any object,
//  and it does not matter. (lets say you add an integer value, like 13)

// In our test case we check to assure that the returned list has one more item than the input list.
//  However the method needs some modification to pass this test.

// P.S. You have to create a new list and add a new item to that. 
// (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work,
//  even though the parameter is passed by value,
//  but the value is poining to the reference of list and any change on parameter will be seen by caller)

function addExtra( listOfNumbers ){
  return listOfNumbers.concat([1])
 
}