
let myDate = new Date();
console.log("1", myDate.toString()); 
console.log("2",myDate.toISOString());
console.log("3",myDate.toJSON());
console.log("4",myDate.toUTCString());
console.log("5",myDate.toLocaleDateString());
console.log("6",myDate.toLocaleTimeString());
console.log("7",myDate.toDateString());
console.log("8",myDate.toTimeString());
console.log("9",myDate.getTimezoneOffset()); //similar to 1 

// if we use parenthesis after any method in js that means we are calling that method

console.log(typeof myDate);

// o/p will be object...as the date is an object in javascript  

// months in js are started from 0 

let myCreatedDate = new Date(2023,0,23); // this will output month as JANUARY
console.log(myCreatedDate);

let date = Date.now();
console.log(date); // for o/p in milliseconds
console.log(Math.round(date/1000)); // for o/p in seconds



// let newDate = new Date();
// console.log(newDate);