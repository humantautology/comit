let message = "3.14 it's a great number but 42 it's the answer to life.";

let pi = parseFloat(message.slice(0,4));
let answerToLife = parseInt(message.slice(28,31));
let result = pi + answerToLife;
let result2 = result.toString();

console.log("result, ", result);
console.log(typeof pi, typeof answerToLife, typeof result2);
console.log(result2, ` is the result of adding ${pi} and ${answerToLife}`);
