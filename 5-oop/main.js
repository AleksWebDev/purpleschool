//Creating basik object for all personges
function Personage (race, name, lenguage, health){
    this.race = race;
    this.name = name;
    this.lenguage = lenguage;
    this.health = health;
}

Personage.prototype.talking = function(){
    return `My name is ${this.name}, my lenguage is ${this.lenguage}`;
}

//Creating Orsimer class which inheritating from Personage class

function Orsimer(weapon, ...rest){
    Personage.apply(this, rest);
    this.weapon = weapon;
}

Orsimer.prototype = Object.create(Personage.prototype);
Orsimer.prototype.constructor = Orsimer;

Orsimer.prototype.hit = function(){
    console.log(`${this.name} is hitting by ${this.weapon}`);
}

function Elf(spell, ...rest){
    
    const spellList = {
        'fireball' : 10,
        'frozenball' : 15,
        'lightning' : 12,
    }

    Personage.apply(this, rest);
    this.spell = spellList[spell];
}

Elf.prototype = Object.create(Personage.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.useSpell = function(){
    return `${this.name} is using ${this.spell} spell`;
}

Elf.prototype.castSpell = function(){
    return `${this.name} is casting new spell ${this.spell}`;
}

const orsimer1 = new Orsimer('swords', 'Orsimer', 'Zuluk', 'orsimerian', 100);
const aensidhe = new Elf('frozenball', 'Aensidhe', 'Emiel', 'HenAdge', 120);

console.log(orsimer1.talking());
console.log(aensidhe.talking());

