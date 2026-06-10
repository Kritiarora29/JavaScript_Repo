let score = "33abc"
// console.log(typeof score) or console.log(typeof(score))

let ValueinNumber = Number(score)
console.log(typeof ValueinNumber) // number
// "33" - 33
// "33abc" - NaN

// null(0) and undefined(NaN) when using Number()

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// 1 - true, 0 - false
// "" - false, " " - true
// null - false, undefined - false


/* 
Note: In JavaScript, the following values are considered falsy:
false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN.
All other values are considered truthy.
*/