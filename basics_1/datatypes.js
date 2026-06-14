"use strict"; // treat all code as newer version of js

alert("Welcome to JavaScript!"); //can't be used in node.js, only in browsers

//code readability shoul be high

// number - int, float, NaN, Infinity
// bigint
// String - ""
// Boolean - true/false
// null - standalone value (nothing/empty/value unknown)
// undefined - value  not assigned
// symbol - unique identifier for objects

// object - complex data structure that can store collections of data and more complex entities

console.log(typeof null); // object (this is a known bug in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol
console.log(typeof {}); // object
console.log(typeof []); // object (arrays are a type of object in JavaScript)
console.log(typeof function() {}); // function (functions are also a type of object in JavaScript)
