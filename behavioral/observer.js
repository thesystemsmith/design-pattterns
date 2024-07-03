class Product {
    constructor() {
        this.price = 0;
        this.actions = [];
    }

    setBasePrice(val) {
        this.price = val;
        this.notifyAll();
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions = this.actions.filter(el => !(el instanceof observer));
    }

    notifyAll() {
        return this.actions.forEach(el => el.update(this));
    }
}

class Fees {
    update(product) {
        product.price = product.price * 1.2;
    }
}

class Proft {
    update(product) {
        product.price = product.price * 2;
    }
}

export {
    Product,
    Fees,
    Proft
};


// The Observer design pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
// Here, the Product class is the subject, and the Fees and Proft classes are observers.


// Usage Example
// Create a Product instance
const product = new Product();

// Create observer instances
const fees = new Fees();
const proft = new Proft();

// Register observers with the product
product.register(fees);
product.register(proft);

// Set the base price and notify observers
product.setBasePrice(100);
console.log(product.price); // Output: 240 (100 * 1.2 * 2)

// Unregister an observer and set a new base price
product.unregister(Proft);
product.setBasePrice(200);
console.log(product.price); // Output: 240 (200 * 1.2)


// This structure allows the Product class to notify all registered observers of any changes, ensuring that the state of the product is updated consistently across all observers.