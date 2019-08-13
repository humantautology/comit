let text = 'game of thrones';

let firstChar = text.charAt(0);
let secondChar = text.charAt(5);
let thirdChar = text.charAt(8);

console.log(`${firstChar}, ${secondChar}, ${thirdChar}`);

let result = (firstChar.concat(secondChar).concat(thirdChar)).toUpperCase();

console.log(`The final result is ${result}`);
