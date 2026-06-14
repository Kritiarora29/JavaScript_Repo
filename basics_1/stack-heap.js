// Stack (Primitive), stored in the call stack
// creates a copy of the value
let x = 2
let y = x
y = 3
console.log(y) // 3
console.log(x) // 2, because changing y does not affect x as y took a copy of x

// Heap (Non-primitive/Reference), stored in the heap, accessed via reference from the stack
// creates a reference to the value, not a copy which means the actual value
let user1 = {
    name: 'John',  
    age: 30
}
let user2 = user1
user2.age = 31
console.log(user2.age) // 31
console.log(user1.age) // 31, because changing user2 also changes user1 as both reference the same object in the heap