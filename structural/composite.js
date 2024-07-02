// Composite
class EquipmentComposition {
    constructor(name) {
        this.equipments = [];
        this.name = name;
    }

    add(equipment) {
        this.equipments.push(equipment);
    }

    getPrice() {
        return this.equipments.reduce((total, equipment) => total + equipment.getPrice(), 0);
    }
}

// Component
class Equipment {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}

// Leaf classes
class FloppyDisk extends Equipment {
    constructor() {
        super("Floppy Disk", 70);
    }
}

class HardDrive extends Equipment {
    constructor() {
        super("Hard Drive", 250);
    }
}

class Memory extends Equipment {
    constructor() {
        super("8GB Memory", 280);
    }
}

export { EquipmentComposition, FloppyDisk, HardDrive, Memory };



// Create composite
const computer = new EquipmentComposition("Computer");

// Add leafs
computer.add(new FloppyDisk());
computer.add(new HardDrive());
computer.add(new Memory());

// Calculate total price
console.log(computer.getPrice()); // Output: 600 (70 + 250 + 280)

// This pattern is useful when you have objects that can be structured into hierarchies and you need to treat individual objects and compositions of objects uniformly.