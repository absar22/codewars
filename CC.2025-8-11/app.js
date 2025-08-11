// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x){
  let newArr = []
  for(let i = 0; i < x.length;i++){
    newArr.push(x.charCodeAt(i)) 
  }
  let total1 =  newArr.join('')
  let total2 = total1.replaceAll('7','1')
  
  let sum1 = 0
  for(let i = 0; i < total1.length ; i++){
     sum1 += parseInt(total1[i]);
  }
  
  let sum2 = 0
  for(let i = 0; i < total2.length;i++){
    sum2 += parseInt(total2[i])
  }
  
  return sum1 - sum2
}

// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:


function greetDevelopers(list) {
  // thank you for checking out my kata :)
  list.forEach(developer => {
     const greetString = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
     developer.greeting = greetString
  })
  return list
}



// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]

const capMe = names => names.map(e => e[0].toUpperCase() + e.slice(1).toLowerCase())



// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.

// Examples
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
//  86420 ---> "86420"



function insertDash(num) {
  let str = num.toString()
    let result = str[0];
 
  for(let i = 1; i < str.length; i++){
    let prevVal = parseInt(str[i - 1]);
    let currentVal = parseInt(str[i]);

    if(prevVal % 2 !== 0 && currentVal % 2 !==0){
      result += '-'
    }
    result += currentVal
  }
  return result
}
