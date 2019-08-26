let player = {
    name: null,
    energy: 100,
    lives: 3,
    verifyLive: function() {
        return this.lives > 0 ? true : false;
      },
    hasEnergy: function(){
        return this.hasEnergy > 0 ? true : false;
      },
    loseEnergy: function(number){
        this.energy -= number
        return `${this.energy}`
    },
    recoverEnergy: function(number){
        if (this.energy + number <=99){
        this.energy += number
        return `${this.energy}`}
    },
    loseLife: function(){
        if(!this.verifyLive()){
            console.log('Game Over!!')
        } else {
        this.lives -= 1
        return `${this.lives}`}
    },
    recoverLife: function(){
        if (this.lives +1 <= 99 && this.verifyLive() && this.hasEnergy()){
        this.lives += 1
        return `${this.lives}`} else{
            console.log('game Over !!')
        }
    }
}


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
  `The player ${player.name} has ${player.energy} energy % and  ${player.lives} lifes`
);
