// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string){
  let newString = ''
  for(let char of string){
   if(char === '5'){
     newString += 'S'
   } else if (char === '1'){
     newString += 'I'
   }else if (char === '0') {
     newString += 'O'
   }  else {
     newString += char
   }
    
}
return newString
}



// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


function shortcut (string) {
  let newString = ''
  for(let char of string){
    if((char === 'a')){
      newString += ''
    }else if (char === 'e'){
      newString += ''
    }else if (char === 'i'){
      newString += ''
    }else if (char === 'o'){
      newString += ''
    }else if (char === 'u'){
      newString += ''
    }else {
      newString += char
    }
  }
   return newString
 }