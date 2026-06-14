let myDate = new Date() // created a object and instance of date
console.log(myDate) // 2026-06-13T13:37:08.103Z
// console.log(myDate.toString()) // Sat Jun 13 2026 13:37:08 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()) // 2026-06-13T13:37:08.103Z
// console.log(myDate.toJSON()) // 2026-06-13T13:37:08.103Z
// console.log(myDate.toLocaleString()) // 6/13/2026, 1:37:08 PM
// console.log(myDate.toDateString()) // Sat Jun 13 2026
// console.log(myDate.toLocaleDateString()) // 6/13/2026

console.log(typeof myDate) // Object

let myCreatedDate = new Date(2023, 0, 23, 5, 3) // months starts from 0 as it's in array format
// let myCreatedDate = new Date("2023-01-23") // YYYY-DD-MM, here month start from 1
// let myCreatedDate = new Date("01-23-2023") // MM-DD-YYYY
console.log(myCreatedDate.toLocaleString()) // 1/23/2023, 5:03:00 AM


/************************************ TIMESTAMPS ************************************/

//used when we need exact time, example - quizes, polls
let myTimeStamp = Date.now()
console.log(myTimeStamp) // 1781358604736, value in milliseconds from 1st January, 1970

/*
 timestamp is difficult to convert into date format
 we convert date format into milliseconds for comparison
 method - getTime()
*/
console.log(myCreatedDate.getTime()) // 1674450180000

// get value in seconds
console.log(Math.floor(myTimeStamp/1000))

let newDate = new Date()
console.log(newDate.getMonth() + 1) // count start from 0, so addded 1
// console.log(newDate.getDay() + 1) // count start from 0, so addded 1

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}))
