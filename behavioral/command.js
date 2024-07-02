class Cockpit {
    constructor(command) {
        this.command = command;
    }

    execute() {
        this.command.execute();
    }
}

class Turbine {
    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }
    off() {
        this.state = false;
    }
}

class OnCommand {
    constructor(turbine) {
        this.turbine = turbine;
    }

    execute() {
        this.turbine.on();
    }
}

class OffCommand {
    constructor(turbine) {
        this.turbine = turbine;
    }

    execute() {
        this.turbine.off();
    }
}

export {
    Cockpit,
    Turbine,
    OnCommand,
    OffCommand
};


// The Command design pattern allows for the encapsulation of requests as objects, letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.


// Example usage:
const turbine = new Turbine();

const onCommand = new OnCommand(turbine);
const offCommand = new OffCommand(turbine);

const cockpit = new Cockpit(onCommand);
cockpit.execute(); // Turbine is now ON.

cockpit.command = offCommand;
cockpit.execute(); // Turbine is now OFF.

console.log(turbine.state); // false


// This structure provides a flexible way to extend and modify commands without changing the classes that use them, adhering to the Open/Closed Principle.