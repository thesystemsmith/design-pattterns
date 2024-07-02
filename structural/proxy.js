class Car {
    drive() {
        return "driving";
    }
}

class CarProxy {
    constructor(driver) {
        this.driver = driver;
    }

    drive() {
        if (this.driver.age < 18) {
            return "too young to drive";
        }
        return new Car().drive();
    }
}

class Driver {
    constructor(age) {
        this.age = age;
    }
}

export { Car, CarProxy, Driver };


// Usage Example
const adultDriver = new Driver(20);
const minorDriver = new Driver(16);

const adultCarProxy = new CarProxy(adultDriver);
console.log(adultCarProxy.drive()); // Output: "driving"

const minorCarProxy = new CarProxy(minorDriver);
console.log(minorCarProxy.drive()); // Output: "too young to drive"


//The Proxy Design Pattern is useful for controlling access to an object, adding additional functionality, or delaying the instantiation of a resource-intensive object. 
// By using the proxy pattern, you can implement access control and other features without modifying the original object's code.;