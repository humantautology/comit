let fibo = [];
let index = 0;
fibo[index] = 0;
fibo[++index] = 1;

do {
      
      index++
    fibo[index] = fibo[index -1] + fibo[index-2];
    console.log(fibo);

} while (fibo.length <=9);


console.log(fibo.length);