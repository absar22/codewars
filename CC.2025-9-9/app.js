// Task
// Given a length, an offset, and a list, slide a window of that length, moving by that offset every step, over the list, returning a list of lists.

// The windows may overlap each other, or skip certain elements. All windows should be of the given length; if insufficient elements remain after a certain offset, end the list of lists. It is possible to take 0 elements from an empty list, so take care to handle window(0,offset,list) correctly.

// The length will always be non-negative; the offset will always be strictly positive.

// Examples
// for 2, 1, [0,1,2,3,4] return [ [0,1], [1,2], [2,3], [3,4] ]
// for 2, 2, [0,1,2,3,4] return [ [0,1], [2,3] ]
// for 2, 3, [0,1,2,3,4] return [ [0,1], [3,4] ]


function window(length,offset,list) {
  let resultArr = []
  let position = 0
  while (position + length <= list.length){
    const currentWindow = list.slice(position , position + length)
    resultArr.push(currentWindow)
    position += offset
  }
  return resultArr
}
// Another way to sove this 
function window(length,offset,list) {
    let newArr = []
    for(let position = 0; position + length <= list.length; position += offset){
      const currentWindow = list.slice(position , position + length)
      newArr.push(currentWindow)
    }
  return newArr
}

// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

function nthEven(n){
  return (n - 1) * 2
  
}