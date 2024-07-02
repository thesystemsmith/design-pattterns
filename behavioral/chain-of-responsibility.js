class ShoppingCart {

    constructor() {
        this.products = [];
    }

    addProduct(p) {
        this.products.push(p);
    };

    getProducts() {
        return this.products;
    }
}

// chain of responsibility 
class Discount {

    calc(products) {
        let ndiscount = new NumberDiscount();
        let pdiscount = new PriceDiscount();
        let none = new NoneDiscount();
        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);
        return ndiscount.exec(products);
    };
}

class NumberDiscount {

    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    };

    exec(products) {
        let result = 0;
        if (products.length > 3)
            result = 0.05;

        return result + this.next.exec(products);
    };
}

class PriceDiscount {

    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    };

    exec(products) {
        let result = 0;
        let total = products.reduce((a, b) => a + b);

        if (total >= 500)
            result = 0.1;

        return result + this.next.exec(products);
    };
}

class NoneDiscount {
    exec() {
        return 0;
    };
}

export {
    ShoppingCart,
    Discount
};



// Example usage:
const cart = new ShoppingCart();
cart.addProduct({ name: 'Product 1', price: 100 });
cart.addProduct({ name: 'Product 2', price: 200 });
cart.addProduct({ name: 'Product 3', price: 150 });
cart.addProduct({ name: 'Product 4', price: 70 });

const discountCalculator = new Discount();
const discount = discountCalculator.calc(cart.getProducts());
console.log(`Total discount: ${discount * 100}%`);