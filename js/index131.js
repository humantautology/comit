let femaleStudents =['diana', 'melissa', 'diarra', 'ruth', 'michelle'];
let maleStudents = ['sam,', 'dami', 'dipo', 'hugo', 'yuriy'];

let students =[femaleStudents, maleStudents];
students.sort();

console.log(students);
console.log('divider====================');

console.log(`the female students are: ${students[0]}`);

let index = 1
while (index <= 1){
    console.log(`the male students are: ${students[index]}`);
    index++
}

for(let index = 0; index <= 1; index++){
    console.log(students[index]);
}