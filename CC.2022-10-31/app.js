// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
  if( n < 0 && m < 0){
    return 0
  }else if(n > 0 && m < 0){
    return 0
  }else if (n < 0 && m > 0){
    return 0
  }else {
    return n * m
  }
 }
 console.log(paperwork(5,5), 25)
 console.log(paperwork(5,-5), 0)
 console.log(paperwork(-5,-5), 0)
 console.log(paperwork(-5,5), 0)


//  Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


function greet (name, owner) {
  // Add code here
  if(name === owner){
    return 	'Hello boss'
  }else {
    return 	'Hello guest'
  }
  
}

// Another way to solve is by using Ternary Operator
function greet (name, owner) {
  // Add code here
//   if(name === owner){
//     return 	'Hello boss'
//   }else {
//     return 	'Hello guest'
//   }
  return name === owner ? 	'Hello boss' : 'Hello guest'  // Ternaray operator
}

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

