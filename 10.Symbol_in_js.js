// Symbol is a type of primitive data type. A symbol is a unique and immutable value that can be used as an identifier for object properties.

let mySymbol = Symbol('Eli');

let myObject = {
    name: "Aditya",
    ['Eli']: "Cohen"
}
console.log(myObject['Eli']);

 // we can only access Symbol values using square notation. Each symbol gnerated is unique. Symbols are often used when you need a property key that is guaranteed to be unique and not accidentally overwritten, such as in the case of library APIs or defining special internal properties in objects.


