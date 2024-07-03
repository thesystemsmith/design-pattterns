class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
}

class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }

    nextState() {
        this.state = this.state.next();
    };
}

export default Order;


// The State design pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class. 
// Here, the Order class uses different OrderStatus subclasses to represent its state.


// Usage Example
// Create an Order instance
const order = new Order();

console.log(order.state.name); // Output: waitingForPayment

// Transition to the next state
order.nextState();
console.log(order.state.name); // Output: shipping

// Transition to the next state
order.nextState();
console.log(order.state.name); // Output: delivered


// This structure allows the Order class to transition between different states, with each state encapsulating its behavior and the logic to determine the next state.