let myFloat = Math.random() * 4;
console.log(myFloat) // e.g. 2.9823968393283025

let roundedNumber = Math.round(myFloat);
switch (roundedNumber) {
    case 0:
        console.log("case 0");
        break;
    case 1:
        console.log("case 1");
        break;
    case 2:
        console.log("case 2");
        break;
    case 3:
        console.log("case 3");
        break;
    case 4:
        console.log("case 4");
        break;
    default:
        console.log("Impossible!");
}
