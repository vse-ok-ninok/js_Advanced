/*
Создать базовый класс Персонажа с параметрами:
     раса, имя, язык и метод - говорить (
     выводит язык и имя в консоль).

Создать класс Орка, который наследуется от Персонажа,
 у которого есть оружие и который имеет метод - удара.

Создать класс Эльфа, который наследуется от Персонажа,
 у которого есть типа заклинаний и метод – создать заклинание.
*/

const Pers = function(race, name, lang) {
    this.rasa = race;
    this.name = name;
    this.lang = lang;
};

Pers.prototype.say = function() {
    console.log(`Мое имя ${this.name}. Язык - ${this.lang}`)
};

const Ork = function(race, name, lang, weapon) {
    Pers.call(this, race, name, lang);
    this.weapon = weapon;
};

Ork.prototype = Object.create(Pers.prototype); //наследование прототипов

Ork.prototype.boom = function() {
    console.log(`${this.name} ударил вас: BOOM!`)
}

const Elf = function(race, name, lang, typeSpells) {
    Pers.call(this, race, name, lang);
    this.typeSpells = typeSpells;
};

Elf.prototype = Object.create(Pers.prototype);

Elf.prototype.makeSpells = function() {
    console.log(`${this.name} колдует в ответ`)
}
const user1 = new Pers('игрок', 'Гавр','русский');
const user2 = new Ork('орк', 'Викм', 'оркский', 'стрелы'); 
const user3 = new Elf('эльф', 'ВУР', 'эльфийский', 'тошниловка');

user1.say();
user2.say();
user3.say();

user2.boom();
user3.makeSpells();
