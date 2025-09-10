// The goal of this exercise is to convert a string to a new string where each character in the new string is
//  "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. 
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    
        const lowerWord = word.toLowerCase()
        return lowerWord
       .split('')
       .map(char => lowerWord.indexOf(char) === lowerWord.lastIndexOf(char)? '(' : ')')
       .join('')

}



// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  text = text.toLowerCase()
  let val = []
  for(let i = 0; i < text.length; i++){
    let char = text[i]
    if(char >= 'a' && char <= 'z'){
         val.push(char.charCodeAt(0) - 96)
    }
    
 
  }
  return val.join(' ')
  
}