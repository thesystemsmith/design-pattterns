class Color {
    constructor(name) {
        this.name = name;
    }
}

const colorFactory = {
    colors: {},
    create(name) {
        let color = this.colors[name];
        if (color) return color;

        color = new Color(name);
        this.colors[name] = color;
        return color;
    }
};

export default colorFactory;


// The Flyweight pattern is used to minimize memory usage by sharing data that is common across similar objects.

// It achieves this by separating intrinsic (shared) state from extrinsic (unique) state. In this case:
// Intrinsic State: The name property of Color objects.
// Extrinsic State: Any additional properties or context specific to each Color instance.


// Usage Example
const red = colorFactory.create('red');
const blue = colorFactory.create('blue');
const anotherRed = colorFactory.create('red'); // Reuses existing 'red' object

console.log(red === anotherRed); // Output: true (same object reference)


//The Flyweight pattern is particularly useful in scenarios where a large number of similar objects need to be managed efficiently. 
// By using a factory to manage object creation and sharing, it optimizes memory usage and improves performance, contributing to a more scalable and efficient application design.