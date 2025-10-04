
// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3

function strCount(obj){
let count = 0
for(let key in obj){
  let val = obj[key]
  if(typeof val === 'string') count ++
  else if(typeof val === 'object' && typeof val !== 'null') count += strCount(val)
}
  return count
}