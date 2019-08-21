
let numbers = [];
let index = 0
while (index <= 1000){
    numbers[index] = index
    index++
}
console.log(numbers);

let newNumbers = numbers.map(function(number){
    return (number + 10);
})

console.log(newNumbers);

newNumbers.forEach(function(number, index){
    console.log(`index: ${index}, original number: ${number - 10}, incremented value: ${number}`);
})

//index: 1, original number: 1, incremented value: 11