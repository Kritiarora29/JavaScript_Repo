const gameScore = 300
console.log(gameScore) // 300

const balance = new Number(1000.6363) // using Number constructor, number object
console.log(balance) // [Number: 1000], include methods also

console.log(balance.toString()) // converts number to string
console.log(balance.toFixed(1)) // 1000.64
console.log(balance.toPrecision(4)) // returns string with precision upto the specified number whether it's before/after decimal point as it start from first non-zero digit

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN")) // add commas according to standards used
// by default uses en-US standards that's why added en-IN for Indian standards

// For NAX and NIN value we have default values present
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)


/************************************** MATH **************************************/
console.log(Math)

console.log(Math.abs(-4)) // make value in positive
console.log(Math.round(4.3)) // round off numbers
console.log(Math.ceil(4.2)) // take upper value always
console.log(Math.floor(4.2)) // take lower value always
// sqrt, pow
console.log(Math.min(3,6,8,2)) // find minimum value
console.log(Math.max(3,6,8,2)) // find maximum value

// console.log(Math.random()) // give random value between 0 to 1
// console.log(Math.random() * 10); // give value for a range, here 1 to 10
// console.log((Math.random() * 10) + 1); // to avoid 0 as value
console.log(Math.floor(Math.random() * 10) + 1); // to get value as whole number, floor value

// if we a fixed range between max and min
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/*
 Math.random - gives value between 0 to 1
 (max - min + 1) - gives value above 1
 min - added to give value between range
*/

