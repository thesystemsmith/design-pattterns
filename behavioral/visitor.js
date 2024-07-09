function bonusVisitor(employee) {
    if (employee instanceof Manager)
        employee.bonus = employee.salary * 2;
    if (employee instanceof Developer)
        employee.bonus = employee.salary;
}

class Employee {

    constructor(salary) {
        this.bonus = 0;
        this.salary = salary;
    }

    accept(visitor) {
        visitor(this);
    }
}

class Manager extends Employee {
    constructor(salary) {
        super(salary);
    }
}

class Developer extends Employee {
    constructor(salary) {
        super(salary);
    }
}

export {
    Developer,
    Manager,
    bonusVisitor
};


// The Visitor design pattern allows you to add new operations to existing classes without modifying those classes. 
// It achieves this by separating the operations (visitors) from the object structure (employees).


// Usage Example
// Create instances of employees
const manager = new Manager(5000);
const developer = new Developer(3000);

// Apply the bonus visitor
bonusVisitor(manager);
bonusVisitor(developer);

console.log(manager.bonus);    // Output: 10000 (5000 * 2)
console.log(developer.bonus);  // Output: 3000  (developer's salary)



// Separation of Concerns: The logic for calculating bonuses is separated from the employee classes (Manager and Developer).
// Extensibility: Easily add new operations (visitors) without modifying the existing employee classes.
// Maintainability: Changes to visitor logic do not affect the employee classes, promoting easier maintenance.