function droidProducer(kind) {
    if (kind === 'battle') return battleDroidFactory;
    return pilotDroidFactory;
}

function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}

function B1() { }
B1.prototype.info = function () {
    return "B1, Battle Droid";
};

function Rx24() { }
Rx24.prototype.info = function () {
    return "Rx24, Pilot Droid";
};

module.exports = droidProducer;


// Usage Example
const battleDroidFactory = droidProducer('battle');
const battleDroid = battleDroidFactory();
console.log(battleDroid.info()); // "B1, Battle Droid"

const pilotDroidFactory = droidProducer('pilot');
const pilotDroid = pilotDroidFactory();
console.log(pilotDroid.info()); // "Rx24, Pilot Droid"

// This pattern allows for flexible creation of related objects (droids) without specifying their concrete classes, adhering to the principles of the Abstract Factory pattern.