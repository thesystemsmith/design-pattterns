class Sum {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}

class Min {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() - this.right.interpret();
    }
}

class Num {
    constructor(val) {
        this.val = val;
    }

    interpret() {
        return this.val;
    }
}

export {
    Num,
    Min,
    Sum
};


//The Interpreter design pattern provides a way to evaluate language grammar or expressions. 
// Here, each class represents a different type of expression (sum, difference, or a numeric value), and the interpret method evaluates these expressions.


// Example usage:
// Constructing the expression tree: (5 + 10) - (2 + 3)
const expression = new Min(
    new Sum(new Num(5), new Num(10)),
    new Sum(new Num(2), new Num(3))
);

// Interpret the expression
const result = expression.interpret();
console.log(result); // Output: 10