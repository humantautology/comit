let arithmetic ={
    add: function(number1, number2){
        if (typeof number1 === 'number' && typeof number1 === 'number'){
        return `${number1} + ${number2} equals ${number1 + number2}`}
    },
    subtract: function(number1, number2){
        if ((typeof number1 === 'number' && typeof number1 === 'number') && number1 > number2){
        return `${number1} - ${number2} equals ${number1 - number2}`}
        else if ((typeof number1 === 'number' && typeof number1 === 'number') && number2 > number1){
            return `${number2} - ${number1} equals ${number2 - number1}`}
    },
    multiply: function(number1, number2){
        if (typeof number1 === 'number' && typeof number1 === 'number'){
            return `${number1} * ${number2} equals ${number1 * number2}`}
    },
    divide: function(number1, number2){
        if ((typeof number1 === 'number' && typeof number1 === 'number') && number1 > number2){
        return `${number1} / ${number2} equals ${number1 / number2}`}
        else if ((typeof number1 === 'number' && typeof number1 === 'number') && number2 > number1){
            return `${number2} / ${number1} equals ${number2 / number1}`}
    },
    remainder: function(number1, number2){
        if ((typeof number1 === 'number' && typeof number1 === 'number') && number1 > number2){
        return `${number1} % ${number2} equals ${number1 % number2}`}
        else if ((typeof number1 === 'number' && typeof number1 === 'number') && number2 > number1){
            return `${number2} % ${number1} equals ${number2 % number1}`}
    }
}

console.log(arithmetic.add(2, 10));
console.log(arithmetic.subtract(10, 5));
console.log(arithmetic.multiply(3, 100));
console.log(arithmetic.divide(40, 2));
console.log(arithmetic.remainder(20, 2));


