let text= "HELLO";
let firstChar = text.charAt(5-1);
let secondChar = text.charAt(5-2);
let thirdChar = text.charAt(5-3);
let fourChar = text.charAt(5-4);
let fifthChar = text.charAt(5-5);


let result = (firstChar.concat(secondChar).concat(thirdChar).concat(fourChar).concat(fifthChar)).toLowerCase();

console.log(`The final result is: ${result}`);