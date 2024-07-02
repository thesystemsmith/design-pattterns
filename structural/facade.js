const shopFacade = {
    calc(price) {
        price = discount(price);
        price = fees(price);
        price += shipping();
        return price;
    }
};

function discount(value) {
    return value * 0.9;
}

function shipping() {
    return 5;
}

function fees(value) {
    return value * 1.05;
}

export default shopFacade;


// The Facade Pattern is particularly useful for managing complex systems by providing a unified interface that clients can interact with.
//  It enhances code readability, maintainability, and scalability by reducing dependencies and encapsulating complexity.


// Usage Example
const price = 100;
const finalPrice = shopFacade.calc(price);
console.log(finalPrice); // Output: 105 (discounted price + fees + shipping)


// Benefits of Facade Pattern
// Simplification: Provides a simple interface (calc method) to a complex subsystem (discount, shipping, fees calculations).
// Encapsulation: Hides the implementation details of the subsystem functions, reducing complexity and coupling.
// Promotes Reusability: Facilitates reuse of the subsystem functions (discount, fees, shipping) in other contexts without exposing their details.