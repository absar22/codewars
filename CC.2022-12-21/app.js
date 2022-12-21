// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter) {
  const value = 'abcdefghijklmnopqrstuvwxyz';
  letter = letter.toLowerCase();
  return `Position of alphabet: ${value.indexOf(letter) + 1}`;
}

