// Arrays are resizable, contain different datatypes, accessed using index(0-based)

// initialization and declaration
const myArr = [1, 2, 3, true, "hello"]
console.log(myArr[3])
const arr = new Array(1, 2, 3, 4)
console.log(myArr.length) // length property not method

// array create shallow copies - whose properties share same reference points, so change relect in original array
// deep copies - not same reference points, creates copy of original array

// Array methods

myArr.push(6) // add value at end of an array
myArr.push(7, 8)
myArr.pop() // remove value from end of an array

myArr.unshift() // add value at start of an array
myArr.shift() // remove value from starting of an array

myArr.includes(3) // result in boolean format - true/false
myArr.indexOf(6) // return index if exist and -1 if doesn't exist

const newArr = myArr.join() // add values(binds) and convert to a string
console.log(myArr) // [ 2, 3, true, 'hello', 6, 7 ] (array)
console.log(newArr) // 2, 3, true, hello, 6, 7 (String)

// slice and splice
console.log("A ", myArr) // B  [ 2, 3, true, 'hello', 6, 7 ], actual array
const arr1 = myArr.slice(1,3) 
console.log(arr1); // [ 3, true ], arr1 (with slice), includes start index value but not end index, also doesn't manipulate actual array
console.log("B ", myArr) // B  [ 2, 3, true, 'hello', 6, 7 ], actual array after slice, same as it was before

const arr2 = myArr.splice(1,3)
console.log(arr2); // [ 3, true, 'hello' ], arr2 (with splice), include start and end index value, also manipulate actual array
console.log("C ", myArr) // [ 2, 6, 7 ], actual array after splice, have only remaining elements left 
