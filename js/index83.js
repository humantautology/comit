let screen = '*************';
let sliceLength =  screen.length - 1;

do {
    console.log(`${screen.slice (0, sliceLength)}`);
    sliceLength -= 1;
    
}
while (sliceLength >= 1) 