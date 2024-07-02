function Sheep(name, weight) {
    this.name = name;
    this.weight = weight;
}

Sheep.prototype.clone = function () {
    return new Sheep(this.name, this.weight);
};

module.exports = Sheep;

// The Prototype pattern allows for the creation of new objects by cloning existing objects. This can be more efficient than creating new objects from scratch, especially if the objects have complex initialization.

// Usage Example
const originalSheep = new Sheep('Dolly', 75);
console.log(originalSheep); // Sheep { name: 'Dolly', weight: 75 }

const clonedSheep = originalSheep.clone();
console.log(clonedSheep); // Sheep { name: 'Dolly', weight: 75 }

console.log(originalSheep === clonedSheep); // false
console.log(originalSheep.name === clonedSheep.name); // true
console.log(originalSheep.weight === clonedSheep.weight); // true

// The cloned Sheep object has the same property values as the original but is a distinct object in memory, demonstrating the Prototype pattern's ability to create copies of objects efficiently.