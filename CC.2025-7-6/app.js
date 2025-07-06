// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.


function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}


// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
    // your code
  const array = ["I love you","a little" ,"a lot","passionately","madly","not at all"]
  let index = 0
  for(let i = 1; i < nbPetals; i++){
    index++
    if(index === array.length){
      index = 0;
    }
  }
  return array[index]
}