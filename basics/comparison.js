// >, >=, <, <=, ==, !=
console.log(5 > 3)  // true, result is in boolean

console.log("2" > 1) //true, because "2" is converted to number 2 and then compared
console.log("01" == 1) // true, because "01" is converted to number 1 and then compared
console.log(0 == false) // true, because 0 is converted to false and then compared
// while comparing keep datatypes same on both sides, as it will not give predictable results

/*
equality check == and comparisons >, < work differently
comparisons convert null to a number (0)
equality check does not convert null to a number, it considers null as a separate value
*/
console.log(null > 0) // false, here null is converted to 0 and then compared
console.log(null == 0) // false, here not converted null to 0
console.log(null >= 0) // true, here converted null to 0

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false, here undefined is converted to NaN

// ==, ===
console.log("1" == 1) // true, here it converts data types only amd compares values
console.log("1" === 1) // false, strictly checks both value and datatype