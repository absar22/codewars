// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  if(numbers.length !== 10) return 'Invalid input'
  const firstPart =  numbers.slice(0,3).join('')
  const secondPart = numbers.slice(3,6).join('')
  const thirdPart = numbers.slice(6,10).join('')
  return `(${firstPart}) ${secondPart}-${thirdPart}`
}


// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) return false
  const current = new Date(currentDate)
  const expired = new Date(expirationDate)
  return current <= expired        
}