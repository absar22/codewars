// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified

function nicknameGenerator(name) {
  let vowels = 'aeiou';
  if (name.length < 4) return "Error: Name too short";
  return vowels.includes(name[2].toLowerCase()) ? name.slice(0, 4) : name.slice(0, 3);
}

