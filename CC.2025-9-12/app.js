// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to.
//  As Philip is getting more curious every day he may soon want to know how many years it was until he would be born,
//  so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." 
// For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: 
// "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. 
// Mind that you need to account for both "year" and "years", depending on the result.


function  calculateAge(birthYear,currentYear) {  
let diff = currentYear - birthYear
if(diff < 0){
  const year = Math.abs(diff)
  return `You will be born in ${year} year${year > 1 ? 's' : ''}.`
}
  if(diff === 0){
    return "You were born this very year!"
  }
  
  return `You are ${diff} year${diff > 1 ? 's' : ''} old.`
}
