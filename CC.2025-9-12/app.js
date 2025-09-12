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




// Your task is to implement the authenticate() method of the sleigh, 
// which takes the name of the person, who wants to board the sleigh and a secret password. 
// If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" 
// (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true.
//  Otherwise it should return false.

// Examples:

// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return  name === 'Santa Claus' && password === 'Ho Ho Ho!'
};



// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers,
//  therefore the given point never lies on the axes.

// Examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4



function quadrant(x, y) {
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }
}



// Input
// Input will always be a string, e.g., "Friday May 2, 7pm". 

// Output
// Output will be the shortened string, e.g., "Friday May 2".

const shortenToDate = longDate => longDate.split(',')[0]
