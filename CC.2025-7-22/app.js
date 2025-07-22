// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified

function nicknameGenerator(name) {
  let vowels = 'aeiou';
  if (name.length < 4) return "Error: Name too short";
  return vowels.includes(name[2].toLowerCase()) ? name.slice(0, 4) : name.slice(0, 3);
}

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"


const sortGiftCode = code => code.split('').sort().join('')


// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


function removeDuplicateWords (s) {
  let words = s.split(' ')
  let newArr = []
  for(let i = 0; i <words.length;i++){
    if(!newArr.includes(words[i])){
      newArr.push(words[i])
    }
  }
  return newArr.join(' ')
}

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	return s.split('').map((x,i) => x.toUpperCase() +x.toLowerCase().repeat(i)).join('-')
}

// our task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "########################

const maskify = cc => cc.length <= 4 ? cc : '#'.repeat(cc.length - 4) + cc.slice(-4)


