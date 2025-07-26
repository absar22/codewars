// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];





function first(arr, n=1) {
  // return arr;
  if (n === 0) return []
  let newArr = []
  for(let i = 0; i < n && i < arr.length ; i++){
    newArr.push(arr[i])
  }
  return newArr
}


// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0

function Hero (name) {
  // add default values here
  this.name = name || 'Hero'
  this.position = '00'
  this.health = 100
  this.damage = 5
  this.experience  = 0
  
}