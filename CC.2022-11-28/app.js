// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

function getRealFloor(n) {
  if((n < 13) && (n > 0)){
    return n -1
  }else if (n > 13){
    return n - 2
  }else if (n < 0){
    return n
  }else return 0
}

// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

function xor(a, b) {
  // TODO: Program Me
  if((a === false) && (b === false)){
    return false
  }else if ((a === true) && (b === false)){
    return true
  }else if ((a === false) && (b === true)){
    return true
  }else if ((a === true) && (a === true)){
    return false
  }
}