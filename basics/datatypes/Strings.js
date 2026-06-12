const name = "John Doe";
const age = 30;
console.log(name + " is " + age); // concatenation, outdated ways
console.log(`${name} is ${age} years old`); // back ticks, for string interpolation by putting placeholders as ${}, modern way

// declaration of string
const str1 = new String("Hello World"); // using String constructor, string object
// if used in browser then we can see key value pairs(str1[0] = "H"), length of string and prototype(all methods of string)

console.log(str1[0]) // H
//console.log(str1.__proto__) // all methods of string

// string methods
console.log(name.length); // length of string, here it is 8
console.log(name.toUpperCase()); // converts string to uppercase, here it is "JOHN DOE" same for toLowerCase()
console.log(name.charAt(3)); // value at index 3, here it is "n"
console.log(name.indexOf("o")); // if there are multiple values then it will return the index of first occurrence, here it is 5

const newName = name.substring(0, 4); // substring from index 0 to 4 but not including index 4 (end index), here it is "John"
console.log(newName);

const newName2 = name.slice(-8, -5); // slice from index -8 to -5 but not including index -5 (end index), here it is "Doe"
console.log(newName2);
//in slice we can also use negative indexing, in substring negative indexing is not allowed

const newString = "       Kriti       "
console.log(newString); // here it is "       Kriti       "
console.log(newString.trim()); // removes whitespace from both ends of the string, here it is "Kriti"
// also have trimstart() and trimEnd() methods to remove whitespace from the start and end of the string respectively
// applicable only on whitespace characters, if there are other characters then it will not remove them and not even line terminators

const address = "Main Street, Anytown";
console.log(address.replace("Main Street", "Elm Street")); // replaces the specified substring with the new substring, here it is "Elm Street, Anytown"

const schoolName = "Greenwood High School";
console.log(schoolName.includes("wood")); // checks if the string contains the specified substring, here it is true
console.log(schoolName.startsWith("Green")); // checks if the string starts with the specified substring, here it is true
console.log(schoolName.endsWith("School")); // checks if the string ends with the specified substring, here it is true

console.log(schoolName.split(" ")); // splits the string into an array of substrings based on the specified delimiter, here it is ["Greenwood", "High", "School"]
console.log(schoolName.split()); // if no delimiter is specified then it will return the original string in an array, here it is ["Greenwood High School"]
console.log(schoolName.split("")); // if empty string is specified as delimiter then it will split the string into individual characters, here it is ["G", "r", "e", "e", "n", "w", "o", "o", "d", " ", "H", "i", "g", "h", " ", "S", "c", "h", "o", "o", "l"]

console.log(schoolName.repeat(2)); // repeats the string the specified number of times, here it is "Greenwood High SchoolGreenwood High School"

// Join a String
// splits the string into an array of substrings and joins them back together with the specified separator
console.log(schoolName.split(" ").join("-")); // "Greenwood-High-School"

// Reverse a String
// splits the string into an array of substrings, reverses the order of the substrings and joins them back together with the specified separator
console.log(schoolName.split("").reverse().join("")); // "School High Greenwood"

