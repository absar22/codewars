// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  let totalGoals = laLigaGoals + copaDelReyGoals+ championsLeagueGoals
  return totalGoals
}

// Use variables to find the sum of the goals Messi scored in 3 competitions

// Information
// Messi goal scoring statistics:

// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals +  championsLeagueGoals  +  copaDelReyGoals



// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied


function greet(language) {
	if(language === 'english') return 'Welcome'
  else if (language === 'czech')   return 'Vitejte'
  else if (language === 'danish') return 'Velkomst'
  else if (language === 'dutch')  return  'Welkom'
  else if (language === 'estonian')  return 'Tere tulemast'
  else if (language === 'finnish')  return 'Tervetuloa'
  else if (language === 'flemish')  return 'Welgekomen'
  else if (language === 'french')  return 'Bienvenue'
  else if (language === 'german')  return 'Willkommen'
  else if (language === 'irish') return 'Failte' 
  else if (language === 'italian') return  'Benvenuto' 
  else if (language === 'latvian') return  'Gaidits'
  else if (language === 'lithuanian') return 'Laukiamas'  
  else if (language === 'polish') return  'Witamy'
   else if (language === 'spanish') return 'Bienvenido'   
   else if (language === 'swedish') return 'Valkommen'  
  else if (language === 'welsh') return 'Croeso' 
  else if (language === 'IP_ADDRESS_INVALID') return 'Welcome'
  else if (language === 'IP_ADDRESS_NOT_FOUND') return 'Welcome'
  else if (language === 'IP_ADDRESS_REQUIRED') return 'Welcome'



}
console.log(greet('welsh'))


// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  // your code 
  x = x.toLowerCase()
  return x === x.split('').reverse().join('')
}