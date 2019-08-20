let mutants =['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];


for (let index = 0; index < 9; index++){
    if (mutants[index] != 'Magneto') {
      console.log(mutants[index]);
    } else {
      break;
    }
  }

  magnetoIndex = mutants.indexOf('Magneto')
mutants[magnetoIndex] = '';

console.log('=====divider=====');

for (let index = 0; index < 9; index++){
    if (mutants[index] != 'Magneto') {
      console.log(mutants[index]);
    } else {
      break;
    }
  }

