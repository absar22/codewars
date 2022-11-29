// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
  // your code here
    if(bonus) return '£' + salary * 10
    else return '£' + salary
  }


//   The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
      break
  }
  
  return name;
}


// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a = "code";
var b = "wa.rs";
var name = a + b;

// How many arguments
// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

// Create a function called args_count that returns the number of arguments provided
function args_count(){

  return arguments.length
}
console.log(args_count(1,2,3,4))


// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  if(arr.length === 1 || arr === []){
    return 0
  }
  let sorted = arr.sort((a,b) => b - a)
  let total = 0
  for(let i = 0; i < sorted.length -1 ; i++){
    total += sorted[i] - sorted[i + 1]
  }
  
  return total
}


// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];

// add the value "codewars" to the already defined websites array

// websites.push('codewars')


// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let result = 0
  for(let element of x){
    if(element === 'good') result+= 1
  }
  
  
    if(result > 2) return 'I smell a series!'
    if(result > 0) return 'Publish!'
    return 'Fail!'
  }

//   Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  return a.filter((e,i) => a.indexOf(e) === i)
}

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

function multipleOfIndex(array) {
  // good luck
  return array.filter((e,i) => e % i == 0)
}