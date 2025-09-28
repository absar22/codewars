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