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