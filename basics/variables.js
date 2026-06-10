
let userName = "Kriti"
var age = 20
/*
 prefer no to use var
 beacause of issue in block scope and functional scope
*/
const city = "bengaluru"
state = "uttar pradesh" //possible but not a proper way
let country //initialized without value so assigned as undefined

name = "Kriti Arora"
age = 21
// city = "agra" // TypeError: Assignment to constant variable.
state = "karnataka"

console.log("Hello World")
console.table([name, age, city, state, country])