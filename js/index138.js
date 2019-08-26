let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
console.log(mutants);

let loveMutants = mutants.map(function(mutant){
    if (mutant == 'Professor X' || mutant == 'Logan' || mutant == 'Phoenix' || mutant == 'Gambit'){
       return `<3 ${mutant}`
        
    } else {
        message = mutant
        return message
    }
})

console.log(loveMutants);

//if I replace the message and return with console.log(`<3 ${mutant}`) and console.log(mutant)
//for the else condition
// I get the array outoput but i also get an undefined array. 

