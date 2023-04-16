// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!mmi

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}


// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {

   // Find the index of the smallest element
  let smallestIndex = 0
  for(let i = 1;  i < numbers.length; i++){
    if(numbers[i] < numbers[smallestIndex]){
      smallestIndex = i
    }
  }
  
    // Create a new array with the smallest element removed
  let result = []
  for(let i = 0; i < numbers.length; i++){
    if(i !== smallestIndex){
      result.push(numbers[i])
    }
  }
  return result
}