// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.


function multiTable(number) {
  // good luck
  let result = ''
  for(let i = 1; i <= 10; i++){
    result += `${i} * ${number} = ${i * number}\n`
  }

  // slice() method to remove the last character (the newline character) from the result string before returning it.
  return result.slice(0, -1)
}


// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.

function joinStrings(string1, string2){
  // code here
 return `${string1} ${string2}`
}


// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".


function getDrinkByProfession(pram) {

  pram = pram.toLowerCase();


  if (pram === "jabroni") {
    return "Patron Tequila";
  } else if (pram === "school counselor") {
    return "Anything with Alcohol";
  } else if (pram === "programmer") {
    return "Hipster Craft Beer";
  } else if (pram === "bike gang member") {
    return "Moonshine";
  } else if (pram === "politician") {
    return "Your tax dollars";
  } else if (pram === "rapper") {
    return "Cristal";
  } else {
    return "Beer";
  }
}