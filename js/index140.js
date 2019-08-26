let mutants =['Professor X', 'Cyclops', 'Iceman', 'Angel','Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

filteredMutants = mutants.filter(function (mutant){
    if (mutant !== 'Magneto' && mutant !== 'Iceman' && mutant !== 'Gambit'){
        console.log(mutant);
    }
}
)


console.log(filteredMutants);