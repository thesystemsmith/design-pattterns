class Tax {

    calc(value) {
        if (value >= 1000)
            value = this.overThousand(value);

        return this.complementaryFee(value);
    }

    complementaryFee(value) {
        return value + 10;
    }

}

class Tax1 extends Tax {

    constructor() {
        super();
    }

    overThousand(value) {
        return value * 1.1;
    }
}

class Tax2 extends Tax {

    constructor() {
        super();
    }

    overThousand(value) {
        return value * 1.2;
    }
}

export {
    Tax1,
    Tax2
};


// The Template Method pattern helps in managing variations in algorithms while preserving the overall algorithm's structure, promoting maintainability and extensibility in software design.


// Usage Example
// Example with Tax1
const tax1 = new Tax1();
console.log(tax1.calc(900)); // Output: 910 (900 + 10)

console.log(tax1.calc(1200)); // Output: 1320 (1200 * 1.1 + 10)

// Example with Tax2
const tax2 = new Tax2();
console.log(tax2.calc(900)); // Output: 910 (900 + 10)

console.log(tax2.calc(1200)); // Output: 1440 (1200 * 1.2 + 10)


// Code Reuse: The Tax class defines the overall structure of tax calculation, promoting code reuse.
// Flexibility: Subclasses (Tax1, Tax2) can override specific steps (overThousand) to provide different behaviors without changing the algorithm's structure defined in the template method (calc).