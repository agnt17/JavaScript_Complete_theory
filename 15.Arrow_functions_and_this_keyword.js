// this keyword is used refer the current context. Now what this really means is that this keyword depends on how the function is called and it is not invoked until the function is called.
//  Suppose we have a object and then that object creates it own scope now inside this scope if we want to access any of its variables then we will this keyword so that it refer to the context of the scope. It is illustrated in example below.

const user = {
    username: "Aditya",
    price : 999,
    welcomeMessage : function(){
        console.log(`Hello ${this.username}, ${this.price}`)
    }
}
user.welcomeMessage();
user.username = "sam",
user.price = 1999
user.welcomeMessage();


// if we print below statement what do u think is the o/p... so its actually empty cause here we are using NODEJS which is just the standalone c++ code of v12 engine of chrome.

console.log(this)

// also if u try to do the same thing in the console of the browser what we gonna get is a window object .... now this is becuase window is a super object or global object in the console.

// what if we try to access this in a function that is in a local scope.

function chai(){
    console.log(this);
}
chai();// this will give a hell lot of values. u can run to check it.

// ****************************Arrow functions****************************

const arrow = () => {
    console.log("Hi!!")
}
arrow();

// this is the simple structure of arrow functions.

// passing parameters

const arrow2 = (num1, num2) => {
    return num1 + num2;
}
console.log(arrow2(3,5));

// Explicit and Implicit return of arrow functions

const arrow3 = (num1 ,num2) => {return num1 + num2;}   // method 1----> explicit return 
const arrow4 = (num1, num2) => (num1+num2) // method 2 ---> implicit return 
console.log(arrow3(4,5));
console.log(arrow4(2,3));



// We cant use this keyword inside arrow functions

