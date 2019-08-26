let numbers = [];
let index = 0
do{
    numbers[index] = 1000 - index;
    index++
} while (index <=1000)

console.log(numbers)

const isEven = function(number){
    return number > 0 && number % 2 === 0;
}

const isODD = function(number){
    return number > 0 && number % 2 !== 0;
}

let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
console.log('divider===========');

let oddNumbers = numbers.filter(isODD);
console.log(oddNumbers);


