let screen = '*************';
let sliceLength =  screen.length - 1;

while (sliceLength >= 1) {
    console.log(`${screen.slice (0, sliceLength)}`);
    sliceLength -= 1;
    
}