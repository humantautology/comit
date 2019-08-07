const firstNumber = 10
const secondNumber = 3
let space = ' '

let addTemplate = `I add ${firstNumber} + ${secondNumber} and the result is ${firstNumber + secondNumber}`
let minusTemplate = `I subtract ${secondNumber} from ${firstNumber} and the result is ${firstNumber - secondNumber}`
let multiplicationTemplate = `I multiply ${firstNumber} by ${secondNumber} and the result is ${firstNumber * secondNumber}`
let divisionTemplate = `I divide ${firstNumber} by ${secondNumber} and the result is ${firstNumber / secondNumber}`
let remainderTemplate = `I divide ${firstNumber} by ${secondNumber} and the remainder is ${firstNumber % secondNumber}`

console.log(addTemplate)
console.log(minusTemplate)
console.log(multiplicationTemplate)
console.log(divisionTemplate)
console.log(remainderTemplate)