class Memento {
    constructor(value) {
        this.value = value;
    }
}

const originator = {
    store: function (val) {
        return new Memento(val);
    },
    restore: function (memento) {
        return memento.value;
    }
};

class Caretaker {
    constructor() {
        this.values = [];
    }

    addMemento(memento) {
        this.values.push(memento);
    }
    getMemento(index) {
        return this.values[index];
    }
}

export {
    originator,
    Caretaker
};


// The Memento design pattern is used to capture and restore an object's state without violating encapsulation. 
// Here, the Memento class captures the state, the originator object creates and restores states, and the Caretaker class manages the saved states.


// Usage Example
// Create a Caretaker instance
const caretaker = new Caretaker();

// Store some states using the originator
const memento1 = originator.store('State1');
const memento2 = originator.store('State2');
const memento3 = originator.store('State3');

// Add mementos to the caretaker
caretaker.addMemento(memento1);
caretaker.addMemento(memento2);
caretaker.addMemento(memento3);

// Restore states from mementos
console.log(originator.restore(caretaker.getMemento(0))); // Output: State1
console.log(originator.restore(caretaker.getMemento(1))); // Output: State2
console.log(originator.restore(caretaker.getMemento(2))); // Output: State3


// This structure allows the state of an object to be saved and restored, enabling undo and redo functionalities while preserving encapsulation.