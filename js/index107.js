function biggerNumber(firstNumber, secondNumber ){
    if (typeof firstNumber === 0 || typeof secondNumber === 0){
        console.log(`Both ${firstNumber} and ${secondNumber} are numbers`)
    }
   
    else if ((typeof firstNumber && typeof secondNumber == 'number') && firstNumber > secondNumber) {
        console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
    } else if ((typeof firstNumber && typeof secondNumber == 'number') && secondNumber > firstNumber){
        console.log(`Number ${secondNumber} is bigger than ${firstNumber}`);
    } else if ((typeof firstNumber && typeof secondNumber == 'number') &&firstNumber === secondNumber){
        console.log(`Both numbers are ${firstNumber}`)
    }
    
 else {
        console.log('Please input numbers');
    }
    
}

biggerNumber(6,3);
biggerNumber(2,2);