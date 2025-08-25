'use strict';

class Car {
    #model;
    #stamp;
    #mileage;
    constructor(stamp, model, mileage) {
        this.#stamp = stamp;
        this.#model = model;
        this.#mileage = mileage;
    };
    info() {
        console.log(`Информация о машине:
            ПРОБЕГ: ${this.#mileage}
            МАРКА: ${this.#stamp}
            МОДЕЛЬ: ${this.#model}`)
    };
    get getMileage() {
        return this.#mileage;
    };

    set mileage(newMileage) {
        if (newMileage >= this.getMileage) {
            this.#mileage = newMileage;
        }
    }

}


const carAudi = new Car('huendai', 'solaris', 150000);
carAudi.info();
console.log(carAudi.getMileage);
carAudi.mileage = 6000000;
console.log(carAudi);