// Optional Chaining. Feature was introduced in ES2020. It can handle code that calls on an object property that doesn't exist.
function extracted(person) {
    if (person?.alive) { // falsy only when person is null, otherwise truthy
        // Nullish Coalescing operator: returns its right-hand side operand when its left-hand side operand is null or undefined, otherwise it returns the left-hand side.
        console.log("Value: " + person.name ?? "You don't have a name!"); // prints the person name when it is not null, otherwise prints the other string
    }
}

let person = {};
extracted(person); // doesn't print anything
person = {"alive": false};
extracted(person); // doesn't print anything
person = {"alive": true};
extracted(person); // Prints: "Value: undefined"
person = {"alive": true, "name": "Percy"};
extracted(person); // Prints: "Value: Percy"
