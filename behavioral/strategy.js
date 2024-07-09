class ShoppingCart {

    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

function guestStrategy(amount) {
    return amount;
}

function regularStrategy(amount) {
    return amount * 0.9;
}

function premiumStrategy(amount) {
    return amount * 0.8;
}

export {
    ShoppingCart,
    guestStrategy,
    regularStrategy,
    premiumStrategy
};

// The Strategy design pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. 
// The ShoppingCart class uses different discount strategies without changing its code.


// Usage Example
// Create a ShoppingCart instance with guest strategy
const cart1 = new ShoppingCart(guestStrategy);
cart1.setAmount(100);
console.log(cart1.checkout()); // Output: 100

// Create a ShoppingCart instance with regular strategy
const cart2 = new ShoppingCart(regularStrategy);
cart2.setAmount(100);
console.log(cart2.checkout()); // Output: 90

// Create a ShoppingCart instance with premium strategy
const cart3 = new ShoppingCart(premiumStrategy);
cart3.setAmount(100);
console.log(cart3.checkout()); // Output: 80