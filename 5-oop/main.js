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

function Orsimer(race, name, lenguage, health, weapon){
    Personage.call(this, race, name, lenguage, health);
    this.weapon = weapon;
}

Orsimer.prototype = Object.create(Personage.prototype);
Orsimer.prototype.constructor = Orsimer;

Orsimer.prototype.hit = function(){
    console.log(`${this.name} is hitting by ${this.weapon}`);
}

function Elf(race, name, lenguage, health, spell){
    let spellList = ['fire ball', 'restoration', 'lightning'];
    Personage.call(this, race, name, lenguage, health);
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

const orsimer1 = new Orsimer('Orsimer', 'Zuluk', 'orsimerian', 100, 'swords');
const aensidhe = new Elf('Aensidhe', 'Emiel', 'HenAdge', 120, [0]);

console.log(aensidhe);
console.log(aensidhe.talking());
console.log(aensidhe.useSpell());
console.log(aensidhe.castSpell());