// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
//  numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets
//  (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
 text = text.toLowerCase().split('')
  let duplicate = []
  let count = 0
  for(let i = 0; i < text.length; i++){
    let char = text[i]
   if(text.indexOf(char) !== text.lastIndexOf(char)){
     if(!duplicate.includes(char)){
       duplicate.push(char)
       count++
     }
   }
  }
  return count
}


// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
function order(words){
  return words.split(' ').sort((a,b) => {
    let valA = 0
    for(let i = 0; i <a.length; i++){
      if(!isNaN(a[i])){
        valA = +a[i]
        break
      }
    }
    let valB = 0
    for(let i = 0; i < b.length ; i++){
      if(!isNaN(b[i])){
        valB = +b[i]
        break
      }
    }
    return valA - valB
  }).join(' ')
}


// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'

var splitInParts = function(s, partLength){
  let arr = []
  for(let i =0; i<s.length; i+=partLength){
    arr.push(s.slice(i , i+partLength))
  }
  return arr.join(' ')
}

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"

function kebabize(str) {
 return str.split('').filter(x=>isNaN(x)).map((el,i) => {
   return (el === el.toUpperCase() && i !== 0 ? '-' : '') + el.toLowerCase()
 })
  .join('')
}


// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces
// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'
function decipherThis(str) {
  return str.split(' ').map(word => {
    let num = ''
    let restStr = ''
    for(let char of word){
      if(!isNaN(char)){
        num += char
      }else{
        restStr += char
      }
    }
    let firstLetter = String.fromCharCode(+num)
    if(restStr.length > 1 ){
      let char = restStr.split('')
      let temp = char[0]
      char[0] = char[char.length -1]
      char[char.length -1] = temp
      restStr = char.join('')
    }
    return firstLetter + restStr
  }).join(' ')
}


// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

function removeConsecutiveDuplicates(string) {
 let arr =  string.split(' ')   
  let result = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0 || arr[i] !== arr[i + 1]){
      result.push(arr[i])
    }
  }
  return result.join(' ')
}

// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters then it should replace the missing second character of the final pair with an 
// underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
   let arr = []
   for(let i = 0; i < str.length; i+=2){
     let vals = str.slice(i,i+2)
     if(vals.length === 1){
       vals+= '_'
     } 
     arr.push(vals)
   }
  return arr
}