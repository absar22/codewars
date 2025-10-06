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