// The Challenge
// Given an integer width and a string ratio written as WIDTH:HEIGHT,
//  output the screen dimensions as a string written as WIDTHxHEIGHT.

// Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.
function findScreenHeight(width,ratio){
    const [widthRatio,heightRatio] = ratio.split(':').map(Number)
    const height = Math.floor(width * heightRatio / widthRatio)
    return `${width}x${Math.floor(height)}`
}
