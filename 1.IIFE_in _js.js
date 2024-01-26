// IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSIONS ----> sometime we need to call the functions and execute it immediately.....but we can do it several ways but what role does IIFE plays is very significant....
//eg: 

function callback(){
    console.log("Aditya Gupta");
}
callback();


// defined above is a naive method to immedately call a fucntion....but IIFE also provied to protect the global scope variables to get polluted by the local scope variables, since they can easily modify global variables...

// eg of IIFE: (function definition)()

(function callback1(){
    console.log("Aditya Gupta")
})();

// here the use of delimeiter...semicolon is necessary cause it stops the function after execution.

// IIFE using an arrow function

(() => {console.log("Aditya gupta")})();

// clearly it also runs....

((name) => {console.log(`Aditya gupta ${name}`)})('Agent17');

// thus we can also use this to pass function statements

// but what if we pass 2 variables or more than 2 variables...

// lets try

((name, age) => {console.log(`Aditya gupta ${name, age}`)})("agent17", 21);

//clearly its o/p is-----> Aditya gupta 21.....which overrides the previous value

// to overcome the above problem we can do this....

((name, age) => {console.log(`Aditya gupta ${name} ${age}`)})("agent17", 21);

// its o/p is ----> Aditya gupta agent17 21...which is what we expect
