let alertResponse = alert("Hello World!");
console.log(alertResponse); // undefined (the alert method is void)

let confirmResponse = confirm("Ok === True\nCancel === False");
console.log(confirmResponse);

let promptResponse = prompt("What is your name?");
console.log("typeof: " + typeof promptResponse);
console.log("Value: " + promptResponse);

// Optional Chaining
// This feature was introduced in ES2020. It can handle code that calls on an object property that doesn't exist.
if (promptResponse?.length) {
    // Nullish Coalescing operator
    // returns its right-hand side operand when its left-hand side operand is null or undefined, otherwise it returns the left-hand side.
    console.log("Value: " + promptResponse ?? "You didn't ever a value!");
}
