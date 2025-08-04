// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

const arrowFunc = function(arr) {
  return arr.map(n => String.fromCharCode(n) ).join(''); 
}


// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;

function htmlspecialchars(formData) {
  
  let result = ''
  
  for(let i = 0; i < formData.length; i++){
    let char = formData[i]
    
   if(char === '<') result += '&lt;'
  else if(char === '>') result += '&gt;'
  else if(char === '"') result += '&quot;'
  else if(char === '&') result += '&amp;'
   else result += char
  }
 
 return result
    
}