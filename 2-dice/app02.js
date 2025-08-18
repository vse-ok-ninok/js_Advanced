'use strict';

function diceRandom(typeDice) {
    const max = Number(typeDice.slice(1));
    return Math.floor(Math.random() * (max - 1) + 1);
};

console.log(diceRandom('d7'));