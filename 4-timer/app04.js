'use strict';

function timerNY() {
    const now = new Date();
    const newYear = new Date('2026-01-01 00:00');
    const time = newYear.getTime() - now.getTime();
    const month = Math.trunc(time / (1000*60*60*24*30)); 
    const days = Math.trunc(time % (1000*60*60*24*30) / (1000*60*60*24));
    const hour = Math.trunc(time % (1000*60*60*24) / (1000*60*60));
    const minutes = Math.trunc(time % (1000*60*60*24) % (1000*60*60) / (1000*60));
    const second = Math.trunc(time % (1000*60*60*24) % (1000*60*60) % (1000*60) / 1000);
    
    document.querySelector('.month').textContent = `${month} месяцев`;
    document.querySelector('.date').textContent = `${days} дней`;
    document.querySelector('.hour').textContent = `${hour} часов`;
    document.querySelector('.minutes').textContent = `${minutes} минут`;
    document.querySelector('.second').textContent = `${second} секунд`;
};

setInterval(timerNY, 1000);

