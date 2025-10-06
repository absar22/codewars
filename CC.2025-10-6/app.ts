// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNamesV(name: string): string {
  const names = name.trim().split(' ')
  const firstName = names[0]
  const lastName = names[names.length - 1]
  
  if(firstName === lastName) return firstName
  if(names.length <= 2) return firstName + ' ' + lastName
  
  const middleInitials = names.slice(1, -1).map(n => n[0] + '.').join(' ')
  return firstName + ' ' + middleInitials + ' ' + lastName
}