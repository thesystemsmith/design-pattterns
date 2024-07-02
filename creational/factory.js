function bmwFactory(type) {
    if (type === 'X5')
        return new Bmw(type, 108000, 300);
    if (type === 'X6')
        return new Bmw(type, 111000, 320);
}

function Bmw(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
}

module.exports = bmwFactory;


// Usage Example
const bmwX5 = bmwFactory('X5');
console.log(bmwX5); // Bmw { model: 'X5', price: 108000, maxSpeed: 300 }

const bmwX6 = bmwFactory('X6');
console.log(bmwX6); // Bmw { model: 'X6', price: 111000, maxSpeed: 320 }

// In this example, bmwX5 and bmwX6 are instances of the Bmw class, created with properties specific to their types.
// The factory function abstracts the instantiation process, making it easy to create different types of Bmw objects without needing to know the details of their construction.