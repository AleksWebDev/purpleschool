class Personage{
    constructor(race, name, lenguage, health, damage){
        this.race = race;
        this.name = name;
        this.lenguage = lenguage;
        this.health = health;
        this.damage = damage;
    }


    sayAboutItslef(){
        console.log(`hi, i am ${this.race}, my name is ${this.name}, my native lenguage is ${this.lenguage}`);
    }
    
    calculateDamage(){
        return this.damage = Math.floor(Math.random() * (this.damage - 1) + 1);
    }

    strike(enemy){
        console.log(`${this.name} is attacking`);
        return enemy.receivingDamage(this.calculateDamage());
    }

    receivingDamage(){
        this.health = this.health - this.damage;
        console.log(`${this.name} is under attack, ${this.health} health point is left`);
    }
    
}

class Orsimer extends Personage{
    constructor(race, name, lenguage, health,  weapon, damage){
        super(race, name, lenguage, health, damage);
        this.weapon = weapon;
    }

    sayAboutItslef(){
        console.log(`hi, i am ${this.race}, my name is ${this.name}, my native lenguage is ${this.lenguage}, my main weapon is ${this.weapon}`);
    }

    attack(){
        console.log(`${this.name} is making attack by the ${this.weapon}`);
    }
}


class AenSidhe extends Personage{
    constructor(race, name, lenguage, health,  spell, damage){
        super(race, name, lenguage, health, damage)
        this.spell = spell;
    }

    sayAboutItslef(){
        console.log(`Hello my enemy, i am ${this.race}, my name is ${this.name}, my native lenguage is ${this.lenguage}, my main spell is ${this.spell}`);
    }

    makingSpell(){
        console.log(`${this.name} is making new spell ${this.spell}`);
    }

    attack(){
        console.log(`${this.name} is making attack by the ${this.spell}`);
    }
}

const aenSidhe = new AenSidhe('aensidhe', 'Erredin', 'hengaid', 120, 'fire ball', 20);
const orsimer = new Orsimer('orsimer', 'Zuluk', 'orsimerian', 100, 'swords', 30);

aenSidhe.sayAboutItslef();
orsimer.sayAboutItslef();

aenSidhe.strike(orsimer);
orsimer.strike(aenSidhe);





