class TrafficTower {
    constructor() {
        this.airplanes = [];
    }

    requestPositions() {
        return this.airplanes.map(airplane => {
            return airplane.position;
        });
    }
}

class Airplane {
    constructor(position, trafficTower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    requestPositions() {
        return this.trafficTower.requestPositions();
    }
}

export {
    TrafficTower,
    Airplane
};


// The Mediator design pattern centralizes complex communication and control logic between related objects.
//  Here, the TrafficTower class acts as a mediator that coordinates the interactions between Airplane objects.


//Usage Example
// Create a TrafficTower instance
const trafficTower = new TrafficTower();

// Create Airplane instances and register them with the TrafficTower
const airplane1 = new Airplane('Position 1', trafficTower);
const airplane2 = new Airplane('Position 2', trafficTower);
const airplane3 = new Airplane('Position 3', trafficTower);

// Airplanes request positions from the TrafficTower
console.log(airplane1.requestPositions()); // ['Position 1', 'Position 2', 'Position 3']
console.log(airplane2.requestPositions()); // ['Position 1', 'Position 2', 'Position 3']
console.log(airplane3.requestPositions()); // ['Position 1', 'Position 2', 'Position 3']


// This structure allows Airplane objects to communicate with each other indirectly through the TrafficTower, promoting loose coupling and centralizing the communication logic.