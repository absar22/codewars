// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  // your code
  return Number(String(n).replace(/0+$/g, ''))  //  + means Matches the 
    // preceding item "x" 1 or more times. Equivalent to {1,}. For example, /a+/ 
    // matches the "a" in "candy" and all the "a"'s in "caaaaaaandy".
}