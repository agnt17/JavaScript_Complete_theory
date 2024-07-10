//merging of arrays

let marvel = ["Captian America", "Iron man", "Loki"];
let dc = ["Batman", "Joker", "Superman"]

// marvel.push(dc);
// console.log(marvel);

// now the o/p is not as usual here... we expected that the o/p should be ["Captian America", "Iron man", "Loki", "Batman", "Joker", "Superman"] but the actual o/p is  
// [
//   'Captian America',
//   'Iron man',
//   'Loki',
//   [ 'Batman', 'Joker', 'Superman' ]
// ]

// push function pushes the whole array. To remove this we can use concatenate array.

let all_heroes = marvel.concat(dc);
console.log(all_heroes);

// now this returns a single array after concatinating  both arrays.

// spread operator also works the same but it works on concat 2 or more than 2 arrays..
//eg: 

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,0];
let arr3 = [11,12,13,14,15];

let final_arr = [...arr1, ...arr2, ...arr3];
console.log(final_arr);

// clearly spread operator that is  ... helps to concatenate arrays.

// how to remove all the brackets inside the array and convert it into a single array ----> flat function

let arr = [1,2,3,4, [5,[6,[7]]], [8,[9]],0];
let modified_arr = arr.flat(1); // removes bracket of depth 1.
let modified_arr2 = arr.flat(2); // removes bracket of depth 2.
let modified_arr3 = arr.flat(Infinity); // removes all brackets of any depth.
console.log(modified_arr);
console.log(modified_arr2);
console.log(modified_arr3);

// isArray function is used to return t or f according if the given parameter is array or not.

console.log(Array.isArray("Aditya")); // return false

// converting an array from any thing

console.log(Array.from("Aditya"));
console.log(Array.from({name: "Aditya"})); // it will return empty array as u havnt provided which thing among key and value has to changed


// array destructuing

// Basic array destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Ignoring certain elements
const [first, , third] = numbers;
console.log(first); // 1
console.log(third); // 3
