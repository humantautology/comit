function getShapePerimeter(base, height){
    if (base == height) {
        perimeter = 4*base
        console.log(`The perimeter is ${perimeter}`);
    } else if (base != height){
        perimeter = (2*base) + (2*height)
        console.log(`The perimeter is ${perimeter}`);
    }
    message = (perimeter <= 100) ? 'The perimeter is fine' : 'The perimter is too big';
    console.log(message);
}

getShapePerimeter(200,10);
getShapePerimeter(10,10);
