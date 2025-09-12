// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to.
//  As Philip is getting more curious every day he may soon want to know how many years it was until he would be born,
//  so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." 
// For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: 
// "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. 
// Mind that you need to account for both "year" and "years", depending on the result.


function  calculateAge(birthYear,currentYear) {  
let diff = currentYear - birthYear
if(diff < 0){
  const year = Math.abs(diff)
  return `You will be born in ${year} year${year > 1 ? 's' : ''}.`
}
  if(diff === 0){
    return "You were born this very year!"
  }
  
  return `You are ${diff} year${diff > 1 ? 's' : ''} old.`
}




// Your task is to implement the authenticate() method of the sleigh, 
// which takes the name of the person, who wants to board the sleigh and a secret password. 
// If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" 
// (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true.
//  Otherwise it should return false.

// Examples:

// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return  name === 'Santa Claus' && password === 'Ho Ho Ho!'
};



// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers,
//  therefore the given point never lies on the axes.

// Examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4



function quadrant(x, y) {
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }
}



// Input
// Input will always be a string, e.g., "Friday May 2, 7pm". 

// Output
// Output will be the shortened string, e.g., "Friday May 2".

const shortenToDate = longDate => longDate.split(',')[0]


// GET /
// This route will read the message parameter and send a JSON response containing the echoed message value. The response should have a 200 status.

// An example query string is ?message=hello which would be echoed as {"message": "hello"}. An empty string, ?message=, is valid and should be echoed normally.

// Respond with a 422 status and the JSON {"error": "'message' was not provided"} when no query parameter message exists.

// Respond with a 422 status and the JSON {"error": "'message' was not a string"} when the message was provided, but of a type other than a string.

// POST /
// This route will parse the request body as JSON and echo a response containing the value from the "message" key of the request. The JSON response is in the same format as the GET above: {"message": "some message"}. Set a 200 status on the response to indicate that the request was OK. An empty string ("message": "") is valid and should be echoed.

// Respond with a 422 status when no "message" key exists, or if the message type is other than a string. The JSON errors for these cases are identical to those used in GET.

// For either method, a request is still valid if additional parameters or keys are present in the query or JSON body. You can ignore them and echo message as normal.

// Notes
// Please use the variable name app to implement your server. Don't use app.listen() to start the Express server; the test suite will invoke the route handlers directly on the app object.

// Your solution file is automatically included with the test suite, so no export is necessary.

// Test input strings consist of alphanumeric characters and spaces.

// If you're not familiar with the Express concepts needed to complete this kata, feel free to reference the documentation and other resources as you build your solution.

const express = require("express");
const app = express();

app.use(express.json()); // to parse JSON bodies

// GET /
app.get("/", (req, res) => {
  const message = req.query.message;

  if (message === undefined) {
    return res.status(422).json({ error: "'message' was not provided" });
  }
  if (typeof message !== "string") {
    return res.status(422).json({ error: "'message' was not a string" });
  }

  return res.status(200).json({ message });
});

// POST /
app.post("/", (req, res) => {
  const { message } = req.body;

  if (message === undefined) {
    return res.status(422).json({ error: "'message' was not provided" });
  }
  if (typeof message !== "string") {
    return res.status(422).json({ error: "'message' was not a string" });
  }

  return res.status(200).json({ message });
});

module.exports = app;