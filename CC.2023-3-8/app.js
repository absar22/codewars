// Create a function to return true type of variable, i.e.

// type([]) == 'array'
// type({}) == 'object'
// type('') == 'string'
// type(NaN) == 'number'

function type(value) {
  // P a variable of type
  // R string representing type of variable
  // E 
  // P  
    if(Array.isArray(value)) return 'array'
    const detectedType = typeof value
    if(detectedType !== 'object') return detectedType
    if(value === null) return 'null'
    return Object.getPrototypeOf(value).constructor.name.toLowerCase()
  }
  