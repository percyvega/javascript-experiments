let alertResponse = alert("Hello World!"); // Opens up a modal with "Hello World!" (warning: Void function return value is used)
console.log(alertResponse); // undefined (this is because the alert method is void)

let confirmResponse = confirm("Ok === True\nCancel === False"); // Opens up a modal
console.log(confirmResponse);

let promptResponse = prompt("What is your name?"); // Opens up a modal
console.log("typeof: " + typeof promptResponse);
console.log("Value: " + promptResponse);
