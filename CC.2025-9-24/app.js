// Task
// Your task is to write such a run-length encoding. For a given string, 
// return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ],
//  such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings.
//  Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

// Examples
// As the article states, RLE is a very simple form of data compression. 
// It's only suitable for runs of data, as one can see in the following example:

// runLengthEncoding("hello world!")
//  //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// It's very effective if the same data value occurs in many consecutive data elements:

// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]
var runLengthEncoding = function(str){
  let counter = 1
  let result = []
  for(let i =0;i<str.length;i++){
    let currentChar = str[i]
    let nextChar = str[i + 1]
    if(currentChar === nextChar){
      counter++
    }else{
      result.push([counter,currentChar])
      counter = 1
    }
  }
  return result
}


// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
function validParentheses(parenStr) {
  let val = 0
 for (char of parenStr){
   if(char === '(' ){
      val++
   }else{
      val--
   }
   if(val < 0) return false
 }
  return val === 0
}


// Write a function that takes two string parameters search_text and full_text and returns the number of times the search_text is found within the full_text.

// Overlap is not permitted: "aaa" contains 1 instance of "aa", not 2.
// search_text will never be empty.
// Examples:
// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
// --> should return 2 since "bb" shows up twice


// full_text = "aaabbbcccc", search_text = "bbb"
// --> should return 1

function solution(fullText, search) {
  
  return fullText.split(search).length -1
}

// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization.
//  Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array,
//  the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

function wordSearch(query, seq){
 query = query.toLowerCase(); 
 let result =  seq.filter(word => word.toLowerCase().includes(query))
    return result.length > 0 ? result : ["Empty"];
}