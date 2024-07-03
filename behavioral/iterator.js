class Iterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }
    hasNext() {
        return this.index < this.elements.length;
    }
}

export default Iterator;



// The Iterator design pattern provides a way to access elements of a collection sequentially without exposing the underlying representation.
// It simplifies the process of traversing a collection.

// Usage Example
// Example array of elements
const elements = [1, 2, 3, 4, 5];

// Create an Iterator for the array
const iterator = new Iterator(elements);

// Use the Iterator to traverse the elements
while (iterator.hasNext()) {
    console.log(iterator.next());
}


// This structure allows for easy and flexible traversal of collections without exposing their internal structure, adhering to the Single Responsibility Principle by separating the traversal logic from the collection itself.