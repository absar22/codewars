// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"

function getStrings(city){
  city = city.toLowerCase()
  let counts = {}
  let order = []
  for(let i = 0; i < city.length ; i++){
    let char = city[i]
    if(char >= 'a' && char <= 'z'){
      if(counts[char]){
        counts[char]++
      }else{
        counts[char] = 1
        order.push(char)
      }
    }
  }
  
  let results = ''
  for(let i = 0; i < order.length; i++){
    let char = order[i]
    results += char + ':' + '*'.repeat(counts[char])
    if(i < order.length - 1){
      results += ','
    }
  }
  
  
  return results 
}

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// Example:

// "Sky scra per" -> "Skyscraper"
// If the building contains no ghosts, return the string:

// "You just wanted my autograph didn't you?"



function ghostBusters(building) {
return building.includes(' ') ? building.replaceAll(' ','') : "You just wanted my autograph didn't you?"
}


// The Task
// Given a string, you must decide whether or not it contains a valid phone number.
//  If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters,
//   else return "Not a phone number".

function isItANum(str) {
let digit = ''
for(let i = 0; i < str.length; i++){
  let letter = str[i]
  if(letter >= '0' && letter <= '9'){
    digit += letter
  }
}
  if(digit.length === 11 && digit[0] === '0'){
    return digit
  }else{
    return "Not a phone number"
  }
}