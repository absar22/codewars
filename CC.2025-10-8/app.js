// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s){
    let results = ''
    for(let i =0; i < s.length; i++){
      let char = s[i]
      if(char >= 'a' && char <= 'z'){
        let charCode = ((char.charCodeAt(0) - 97 + 10 ) % 26) + 97
        results += String.fromCharCode(charCode)
      }
    }
  return results
}

// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"


function sevenAte9(str) {
  let results = ''
  for(let i = 0; i < str.length; i++){
    if(str[i] === '9' && str[i-1] === '7' && str[i + 1] === '7'){
      continue
    }else{
      results += str[i]
    }
  }
  return results
}

//
function sevenAte9(str) {
  while(str.includes('797')){
    str =  str.replaceAll('797', '77')
  }
  return str
}