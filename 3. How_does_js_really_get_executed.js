// How does JS really gets executed ?

// As we all know js is single threaded lang but it handles multiple execution with the help of web workers...
// Now,

//    ---------> " js is executed in 2 phase: Memory phase + execution phase " <-----------

// first and first .... Js creats a GLOBAL EXECUTION SPACE which is created no matter what happens...it is like do statement in do while loop....It loads and assigns the undefined values to all varibles whose scope is global.


//eg:

let val1 = 10;
let val2 = 20;

((a, b) => {                          // IIFE NOTATION  
    console.log(a + b);
})(val1, val2);


// very well....how it proceeds is that the js engine first assigns undefined to val1 and val2 ...it also assigns the values to the function definition but doesnt assigns them undefined...Basically to handle a function it creates a additional memory block and deals with that function inside it and whenever the function returns...(function always returns to global scope) the memory block get destroyed. This is how js function renders the js.