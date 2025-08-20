/*
Сделать функцию валидации возраста.
 На вход передаётся строка даты рождения пользователя вида 
 “2022-01-01”. гг мм дд

Необходимо вывести true, 
если ему больше 14 лет и false, если меньше

ГОД РОЖДЕНИЯ должен быть МЕНЬШЕ 2011. 2025 - 2011  => 14
*/
'use strict'; 

function accesIs(userBirthday) {
    const currentTime = new Date();
    const timeBirthday = new Date(userBirthday);

    const date = currentTime.setFullYear(currentTime.getFullYear() - 14);
    if (date < (timeBirthday.getTime() + (1000*60*60*24))) {
        return false;
    } else {
        return true;
    }
};
console.log(accesIs('2011-08-20')); //false
console.log(accesIs('2010-08-20')); //true
console.log(accesIs('2011-08-19')); //true 
console.log(accesIs('2011-07-20')); //true 
console.log(accesIs('2011-08-19')); //true

