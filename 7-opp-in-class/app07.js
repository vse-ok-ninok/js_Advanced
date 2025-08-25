'use strict';

class Person {
    constructor(species, name, lang) {
        this.species = species;
        this.lang = lang;
        this.name = name;
    };

    say() {
        console.log(`Меня зовут ${this.name}. Я говорю на ${this.lang} языке. Я ${this.species}`);
    };
};


class Ork extends Person {
    constructor(species, name, lang, weapon) {
        super(species, name, lang);
        this.weapon = weapon;
    };

    hit() {
        console.log(`персонаж ${this.name} совершил удар`);
    };

    say() {
        console.log(`Я есть Орк. Мое имя ${this.name}`)
    };
}

class Elf extends Person {
    constructor(species, name, lang, spell) {
        super(species, name, lang);
        this.spell = spell;
    };

    makeSpell() {
        console.log(`Персонаж ${this.name} создал новое заклинание`)
    };

    say() {
        console.log(`Меня зовут ${this.name} и я ЭЛЬФ`);
    }
};


const user1 = new Person('человек', 'Никита', 'русский');
const user2 = new Ork('орк', 'Шрек', 'оркский', 'дубинка');
const user3 = new Elf('эльф', 'Леголас', 'эльфийский','экарма');

user1.say();
user2.say();
user3.say();

user2.hit();
user3.makeSpell();

console.log(user2.weapon);
console.log(user3.spell);