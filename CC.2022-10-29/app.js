// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if(!array || array.length === 0 || array.length === 1 || array.length === 2){
    return 0
  }
  let sortedValue = array.sort((a,b)=> a-b)  //sorted value in assending order
  let removeFirst = sortedValue.shift()   // Removed first Element
  let removeLast = sortedValue.pop()      // Removed last Element
  return sortedValue.reduce((acc,c) => acc +c) // We added the remaining array
  
}

console.log(sumArray([1, 1, 11, 2, 3 ]))


// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
  // Return your answer
 if(l === w){
   return l * w
 } else{
   return 2*(l+w)
 }
};
console.log(areaOrPerimeter(3,3))


// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
if(distanceToPump  <= mpg * fuelLeft ){
  return true
}else{
  return false
}
};
console.log(zeroFuel(50,25,2), true)


// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)