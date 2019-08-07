const rectangleHeight = 10;
const rectangleBase = 4;

console.log('A rectangle has four sides. 2 high sides and 2 base sides. Our rectangle has a height value of 10 and base value of 4.');
console.log('The area of a rectangle = base(B) x height(H). Perimeter = 2B + 2H');

const area = rectangleHeight*rectangleBase;
const rectangleArea = `Area = ${area}`;

const perimeter = (2*rectangleHeight) + (2*rectangleBase);
const rectanglePerimeter = `Perimeter = ${perimeter}`;

console.log(rectangleArea);
console.log(rectanglePerimeter);