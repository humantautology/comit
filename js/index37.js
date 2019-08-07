let average = 6;
let studentAverage = 4;

let pass = studentAverage >= average;
let missingPoints = average - studentAverage;

console.log('This student has a greater or equal average required to pass: ' + pass);
console.log(`This student is missing ${missingPoints} points to pass` );