let myFloat = Math.random() * 4;
console.log(myFloat)
let roundedNumber = Math.round(myFloat);
switch (roundedNumber) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log(roundedNumber + ", no match")
}