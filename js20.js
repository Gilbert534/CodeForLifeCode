class AnimeCharacter{
    constructor(name, homeTown, power, health, specialAttack, level){
        this.name = name;
        this.homeTown = homeTown;
        this.power = power;
        this.health = health;
        this.specialAttack = specialAttack;
        this.level = level;
    }
    dodge(opponent, attack){
        console.log(`${this.name} dodged ${opponent}s ${attack}`);
    }
    powerUp(){
        if(this.level>=96){
            this.level = 100;
        console.log(`${this.name} power level is full! special Available`);        
    }else{
        this.level +=4;
        console.log(`${this.name} power level is now at ${this.level}%`);
        }
    }
    specialAttack(){
        if(this.level == 100){
            this.level -40;
            console.log(`${this.name}  has unleashed ${this.specialAttack}`)
        }else{
            console.log(`${this.name} cant do that right now, your power level is at ${this.level}%`)
        }
    }

}

let john = new AnimeCharacter("John","boredville","blast",100,"slash",100);
console.log(john.name);

kick(opponent);{
    opponent.health -= 20;
    console.log(`John delivers a kick landing on ${opponent.name}: **** ${opponent.name}'s HEALTH: ${opponent.health}% ****`);
}
punch(opponent);{
    opponent.health -= 10;
    console.log(` Punched! **** ${opponent.name}'s HEALTH: ${opponent.health}% ****`);
}

   