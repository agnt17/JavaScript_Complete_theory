// functions in js

function sayMyName(){
    console.log("A")
    console.log("d")
    console.log("i")
    console.log("t")
    console.log("y")
    console.log("a")
}

sayMyName      // -----> this is just a reference, it is also used at many places but this does not executes the function 
sayMyName()   // ----> if we use parenthesis then only the function will execute and prints whatever is inside function body.

function user(username){
    return `Sergeant my name is ${username}`;
}
console.log(user("Aditya Gupta"));

// default parameter

function user1(username = "Agent17"){
    return `Sergeant my name is ${username}`;
}
console.log(user1());

// rest operator in functions: Sometimes what happens is that we don't know how many values are gonna come inside a function parameter so we use rest operator which usually do that, it stores all incoming values into an array and then we can apply any of our known operations in that array.

function cartItemsAddition(...num){
    return num
;}
console.log(cartItemsAddition(100,200,300,400,500));

// now this is similar to spread operator or destructure operator, yes it is same one.


// how variable data is passed inside a function taking data from a object.
const user2 = {
    name : "Aditya",
    age : 21
}
function user_data(user2){
    console.log(`The username is ${user2.name} and his/her age is ${user2.age}`)
    return
}
user_data(user2);