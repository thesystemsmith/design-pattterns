function Soldier(lvl) {
    this.lvl = lvl;
}

Soldier.prototype.attack = function () {
    return this.lvl * 1;
};

function Jedi(lvl) {
    this.lvl = lvl;
}

Jedi.prototype.attackWithSaber = function () {
    return this.lvl * 100;
};

function JediAdapter(jedi) {
    this.jedi = jedi;
}

JediAdapter.prototype.attack = function () {
    return this.jedi.attackWithSaber();
};

module.exports = [Soldier, Jedi, JediAdapter];


// The Soldier class has an attack method that returns the level multiplied by 1.
// The Jedi class has an attackWithSaber method that returns the level multiplied by 100.
// The JediAdapter class adapts a Jedi instance to have an attack method similar to the Soldier class by internally calling the attackWithSaber method.

// Usage Example
const soldier = new Soldier(5);
console.log(soldier.attack()); // Outputs: 5

const jedi = new Jedi(5);
const jediAdapter = new JediAdapter(jedi);
console.log(jediAdapter.attack()); // Outputs: 500


