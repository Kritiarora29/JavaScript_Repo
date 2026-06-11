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



/* ********************Operations******************** */

let negvalue = -5 //negative value
// arithmetic operations: +, -, *, /, **, %

let str1 = "Hello"
let str2 = " World!"
let str3 = str1 + str2
console.log(str3) // Hello World!

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 3) // 123, if string is present at first then all will be treated as string
console.log(1 + 2 + "3") // 33, if number is present at first then all will be treated as number until string is present
console.log(5 - "2") // 3, if - operator is used then it will try to convert string to number

console.log( + true) // 1, + operator will try to convert boolean to number
//console.log( true +) // error -  expression expected
console.log( + "") // 0, as empty string with or without space will be considered as 0 in number conversion

//not a good practice
let num1, num2, num3
num1 = num2 = num3 = 5 + 5 // all will be assigned 10, but not a good practice 

// prefix and postfix increment and decrement
let x = 5
let y = x++ // postfix increment, first assign value to y and then increment x
console.log("x:" + x + ", y:" + y) // 6 5
 let z = ++x // prefix increment, first increment x and then assign value to z
console.log("x:" + x + ", z:" + z) // 7 7
//++(++x) and --(--x) // SyntaxError: Invalid left-hand side expression in prefix operation

