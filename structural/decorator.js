// Base component
class Pasta {
    constructor() {
        this.price = 0;
    }

    getPrice() {
        return this.price;
    }
}

// Concrete component
class Penne extends Pasta {
    constructor() {
        super();
        this.price = 8;
    }
}

// Decorator: Sauce
class SauceDecorator {
    constructor(pasta) {
        this.pasta = pasta;
    }

    getPrice() {
        return this.pasta.getPrice() + 5;
    }
}

// Decorator: Cheese
class CheeseDecorator {
    constructor(pasta) {
        this.pasta = pasta;
    }

    getPrice() {
        return this.pasta.getPrice() + 3;
    }
}

export { Penne, SauceDecorator, CheeseDecorator };


// It allows you to extend the behavior of objects dynamically, making it a powerful tool for managing object behaviors in a modular and reusable manner.

// Usage Example
let pasta = new Penne();

// Add decorators
pasta = new SauceDecorator(pasta);
pasta = new CheeseDecorator(pasta);

// Get total price
console.log(pasta.getPrice()); // Output: 16 (8 + 5 + 3)