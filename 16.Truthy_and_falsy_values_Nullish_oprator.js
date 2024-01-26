// truthy and falsy are the types of values in js in which it is made that all falsy values will return false as their o/p while all truthy values will return true as their o/p

// falsy values : false, 0, -0, BigInt's 0n, "" , null, undefined, NaN.

// truthy values : All remaining values in js are truth values eg: [], true, 1, "0" , 'false', " ", { }, function() {}, etc are truthy values.


// Nullish Coalescing operator --> ?? : It provides a convinient way to handle default values in cases where a variable is either null or undefined....It is recently done in ECMA2020. The nullish coalescing operator returns the right-hand operand when the left-hand operand is null or undefined; otherwise, it returns the left-hand operand.

//eg
let val1 = 5 ?? 10 // o/p: 5
let val2 = null ?? 10 // o/p : 10 
let val3 = undefined ?? 15 // o/p : undefined
let val4 = null ?? 10 ?? 20 // o/p : 10


//ternary operator -----> Syntax : Ternary ? true : false;