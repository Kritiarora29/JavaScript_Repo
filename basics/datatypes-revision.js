/*
Javascript is a dynamically typed language.
variables can hold values of any type without explicit declaration.
Type of a variable is determined at runtime based on the value it holds.
example:
let x = 5; // x is a number
x = "Hello"; // now x is a string
x = true; // now x is a boolean
*/

// Primitive datatypes
// String, Number, Boolean, null, undefined, Symbol

let name = "John" // String
let age = 30.5 // Number
let isStudent = true // Boolean
let outsideTemp = null // null, temperature example (type: Object)
let phoneNumber // undefined, or let phoneNumber = undefined
let id = Symbol("123"); // Symbol
let anotherid = Symbol("123");
console.log(id === anotherid) // false, each Symbol has unique identity even with same value
let bigNumber = 1234567895678901234567890n; // BigInt, for very large integers (type: bigint, in special cases it is undefined)

// Non-primitive datatypes (Reference datatypes)
// Object, Array, Function

let student = {
    name: "Alice",
    age: 25
    } // Object (key:value pairs)
    
let person = ["A", "B", "C"] // Array (type: object, array is a special type of object with indexed elements and length property)

let greet = function() {
    console.log("Hello!");
} // Function, called using greet() (type: function, object function is a special type of object)