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