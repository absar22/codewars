// Simple, remove the spaces from the string, then return the resultant string.

// P: we will take strings as an parameter ? Is there any other empty string or special characters 
// R: Return  string with no spaces
// E: if we give (Hello world) we get => (helloworld)
//    if we give (Naruto Uzamaki) we get => (NarutoUzamaki)
//    if we give (Eren Yeager) we get => (ErenYeager)

// P: Make a function that takes a string 
function noSpace(x){

  
  return x.split(' ').join('')
 }
 
 console.log(noSpace('Hello world'), 'Helloworld')
 console.log(noSpace(' Naruto Uzamaki '), 'NarutoUzamaki')
 console.log(noSpace('Eren    Yeager'), 'ErenYeager')




// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// P: we have a parameter which is an Array ? or we have some special characters ?
// R: Total Count of all +ve Numbers & Sum of all -ve Numbers
// E: if give value like [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,    -15] => output will be  [10, -65]
//   if give value like  [10, 14 , 67, 89, -10, -20, -20]=> Output will  [4,-50]
//   if give value like  [10, 14 , 67, 89, -10, -20, -20]=> Output will  [4,-50]

// P: Make a function that takes one parameter
function countPositivesSumNegatives(input) {

  if(input === null || input.length === 0){
    return []
  }
  let count = 0
  let sum = 0
  for(let i of input){
    if(i > 0){
      count += 1
    }else{
      sum += i
    }
  }
  
  return [count, sum]
  
  }

  console.log(countPositivesSumNegatives([10, 14 , 67, 89, -10, -20, -20]) , [4, -50])


  // Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x){
  return x.reduce((acc, c) => acc * c)
  }
  console.log(grow([1,2,3]))


//   Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


function stringToArray(string){

  return string.split(' ')
 
 }