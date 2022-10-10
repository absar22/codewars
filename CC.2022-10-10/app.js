// Simple, remove the spaces from the string, then return the resultant string.

// P: we will take strings as an parameter ? Is there any other empty string or special characters 
// R: Return  string with no spaces
// E: if we give (Hello world) we get => (helloworld)
//    if we give (Naruto Uzamaki) we get => (NarutoUzamaki)
//    if we give (Eren Yeager) we get => (ErenYeager)

// P: Make a function that takes a string 
function noSpace(x){

  
  return x.split(' ').join('')
 }
 
 console.log(noSpace('Hello world'), 'Helloworld')
 console.log(noSpace(' Naruto Uzamaki '), 'NarutoUzamaki')
 console.log(noSpace('Eren    Yeager'), 'ErenYeager')