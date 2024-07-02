function EpsonPrinter(ink) {
    this.ink = ink();
}
EpsonPrinter.prototype.print = function () {
    return "Printer: Epson, Ink: " + this.ink;
};

function HPprinter(ink) {
    this.ink = ink();
}
HPprinter.prototype.print = function () {
    return "Printer: HP, Ink: " + this.ink;
};

function acrylicInk() {
    return "acrylic-based";
}

function alcoholInk() {
    return "alcohol-based";
}

module.exports = [EpsonPrinter, HPprinter, acrylicInk, alcoholInk];

//By using functions (acrylicInk and alcoholInk) as parameters for printer instantiation, you can easily change the type of ink used by each printer without modifying the printer classes themselves. 
// This separation of concerns adheres to the Bridge pattern's principle of decoupling abstraction from implementation.

// Usage Example
const epsonPrinter = new EpsonPrinter(acrylicInk);
console.log(epsonPrinter.print()); // Output: Printer: Epson, Ink: acrylic-based

const hpPrinter = new HPprinter(alcoholInk);
console.log(hpPrinter.print()); // Output: Printer: HP, Ink: alcohol-based