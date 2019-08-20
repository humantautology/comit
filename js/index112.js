function showNumbers(start, end) {
    if ((typeof end && typeof start) == 'number' && start > end){
        for (let number = start; number >= end; number-=1) {
            console.log(number);
        } 
    } else if ((typeof end && typeof start) == 'number' && end > start){
        for (let number = start; number <= end; number++) {
            console.log(number);}
    } else if ((typeof end && typeof start) == 'number' && end == start){
            console.log('The numbers are the same. Input different numbers for each entry');
    } else if ((typeof end && typeof start) !== 'number') {
        console.log('Please input only numbers.')
    }
}

showNumbers(0,1000);
showNumbers(1000,0);
showNumbers(100,100);
showNumbers("100",300)