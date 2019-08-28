let player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage){
        if(this.energy-damage == 0 || this.energy == damage || this.energy == 0){
            this.lives--;
            this.energy = 0
        } else if 
            (this.energy > damage){
                return this.energy - damage
            }
    },
    recoverEnergy: function(energyUp) {
        if(this.energy + energyUp < 100){
            this.energy += energyUp
        }
    },
    loseLife: function(){
        if(this.lives > 0){
            this.lives--
        }else {
            console.log('Game over!!');
        }    
    },
    recoverLife: function(){
        if (this.lives < 100){
            this.lives++
        }
}}


player.name = "oladipo";
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
player.recoverLife();

console.log(
  `The player ${player.name} has ${player.energy} energy and  ${player.lives} lifes`
);
