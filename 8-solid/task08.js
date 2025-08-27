'use strict';

class Billing {
    #amount;
    constructor(amount) {
        this.#amount = amount;
    };

    get amount() {
        return this.#amount;
    };

    calculateTotal() {
        //return this.#amount;
    }
};

class FixBilling extends Billing {
    calculateTotal() {
        return this.amount;
    }
};

class HourBilling extends Billing {
    #hour;
    constructor(amount, hour) {
        super(amount);
        this.#hour = hour;
    };

    get hour() {
        return this.#hour;
    };

    calculateTotal() {
        return this.amount * this.#hour;
    }
};

class ItemBilling extends Billing {
    #items;
    constructor(amount, items) {
        super(amount);
        this.#items = items;
    };

    get items() {
        return this.#items;
    };

    calculateTotal() {
        return this.amount * this.#items;
    };
};

const fix = new FixBilling(50);
console.log(`Фиксированный биллинг: ${fix.calculateTotal()}`);

const hour = new HourBilling(54, 6);
console.log(`Почасовой биллинг: ${hour.calculateTotal()}`);

const items = new ItemBilling(54, 21);
console.log(`По количеству элементов: ${items.calculateTotal()}`);