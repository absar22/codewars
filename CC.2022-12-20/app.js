// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


function powersOfTwo(n){
  let result = []
  for(let i = 0; i <= n; i++){
    result.push(2 ** i)
  }
    return result
   
  }


//   Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

function move (position, roll) {
  // return the new position
  return position + roll * 2
}


// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


function findDifference(a,b) {
  //loading...
    let volume1 = a.reduce((acc,c) => acc * c, 1)
    let volume2 = b.reduce((acc,c) => acc * c, 1)
    if((volume1 - volume2) > 0){
      return volume1 - volume2
    }else {
      return Math.abs(volume1 - volume2 )
    }
}
console.log(findDifference([3, 2, 5], [1, 4, 4]))