let mutants = [];

mutants.push('Professor X');
mutants.push('Cyclops');
mutants.push('Iceman');
mutants.push('angel');
mutants.push('Magneto');
mutants.push('Beast');
mutants.push('Phoenix');
mutants.push('Logan');
mutants.push('gambit');

mutants.forEach(function(mutant, index){
    if (index == 2 || index == 6 || index == 7){
        console.log(`${mutant}`)} else {
            console.log(mutant);
        }
})

// dont' really understand. aren't the values in mutants already strings. 