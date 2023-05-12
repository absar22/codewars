// Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

// SafeInteger(9007199254740990) //true
// SafeInteger(-90) //true
// SafeInteger(9007199254740992) //false

function SafeInteger(n) {
  return Number.isSafeInteger(n)
}


// Check your arrows
// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
// You need to verify that you have some good ones left, in order to prepare for battle:

// anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
// If an arrow in the quiver does not have a damaged status, it means it's new.

// The expected result is a boolean, indicating whether you have any good arrows left.

function anyArrows(arrows){
  // arrow it
  return arrows.some(arrow => !arrow.damaged );
}