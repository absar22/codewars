// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

// Examples
// [1, 2, 3] returns 6 because the maximum product is obtained from multiplying  2∗3=6
// [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 5∗10=50
// [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying   −2∗7=−14


function adjacentElementsProduct(array) {
  let max = array[0]*array[1]
  for(let i= 1;i<array.length;i++){
    let product = array[i]*array[i-1]
    if(product>max){
      max = product
    }
  }
  return max
}

// Task
// You are given a dictionary-like object (implementation may vary by language) containing languages as keys and your corresponding test results as values. Return the list of languages where your score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// Input object with key-value pairs:
// "Java" -> 10, "Ruby" -> 80, "Python" -> 65
// Ouput:
// [ "Ruby", "Python" ]

// Input object with key-value pairs:
// "Hindi" -> 60, "Greek" -> 71, "Dutch" -> 93
// Output:
// [ "Dutch", "Greek", "Hindi" ]

// Input object with key-value pairs:
// "C++" -> 50, "ASM" -> 10, "Haskell" -> 20
// Output:
// [ ]

function myLanguages(results) {
  return Object.entries(results)
    .filter(([language, score]) => score >= 60)
    .sort((a,b) => b[1] - a[1])
    .map(([language, score]) => language);
}