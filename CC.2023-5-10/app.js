// Create a function that finds the integral of the expression passed.

// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

function integrate(coefficient, exponent) {
  const val1 = coefficient / (exponent + 1 )
  const val2 = exponent + 1
  return `${val1}x^${val2}`
}

