// You need to create a function that converts the input into this format, 
// with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"
function spongeMeme(sentence) {
  let  upperLowerCaseSentence = ''
  for(let i = 0; i < sentence.length; i ++){
    if(i % 2 === 0){
      upperLowerCaseSentence += sentence[i].toUpperCase()
    }else{
         upperLowerCaseSentence += sentence[i].toLowerCase()
    }
  }
  return upperLowerCaseSentence
}


// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name){
 let names = name.trim().split(' ')
let firstName = names[0]
let lastName = names[names.length -1]
if(firstName === lastName) return firstName
if(names.length <= 2) return firstName + ' ' + lastName
  let middleName = names.slice(1,-1).map(n => n[0] + '.').join(' ')
  return firstName + ' ' + middleName + ' ' + lastName
}


