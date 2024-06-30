// variable (not a constant const)
let myVariable;
console.log(myVariable); // undefined
console.log(typeof myVariable); // undefined
console.log(myVariable = "Percy"); // Percy
console.log(myVariable); // Percy
console.log(typeof myVariable); // string
// The == operator performs a loose equality check, which means that the operator will convert the values to the same type before comparing them.
console.log(myVariable == "Percy"); // true (warning: Comparison myVariable == "Percy" may cause unexpected type coercion)
console.log(myVariable != "Percy"); // false (Comparison myVariable != "Percy" may cause unexpected type coercion)
// The === operator performs a strict equality check, which means that the operator will not convert the values to the same type before comparing them.
console.log(myVariable === "Percy"); // true
console.log(myVariable !== "Percy"); // false

const myNumber = 10;
console.log(myNumber); // 10
console.log(typeof myNumber); // number
console.log(myNumber == 10); // true (warning: Comparison myNumber == 10 may cause unexpected type coercion)
console.log(myNumber != 10); // false (Comparison myNumber != 10 may cause unexpected type coercion)
console.log(myNumber == "10"); // true (warning: Comparison myNumber == "10" may cause unexpected type coercion)
console.log(myNumber != "10"); // false (Comparison myNumber != "10" may cause unexpected type coercion)
console.log(myNumber === 10); // true
console.log(myNumber !== 10); // false
console.log(myNumber === "10"); // false !!!
console.log(myNumber !== "10"); // true !!!
