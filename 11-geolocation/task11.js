'use strict';

const getGEO = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        position => {
            resolve([position.coords.latitude, position.coords.longitude]);
        }, 
        error => {
            if (error.code === 1) {
                reject(new Error('Доступ к геолокации отклонен'));
            }
        });
});

getGEO
    .then(data => console.log(data))
    .catch(error => console.log(error));