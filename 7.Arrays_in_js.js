// arrays in js will store any type of non mix and mix data..like they can store numbers strings infact objects like arrays etc.

//eg: 
const Arr = new Array(8);
const Arr2 = [1,"Aditya is ", undefined, null, ["flash", "Eli Cohen", "Agent17"]];
console.log(Arr);
console.log(Arr2); // clearly this array is valid and can store any type of data.


//no of ways in which array can be declared
let myArr = [1, 2, 3, 4, 5]; // this is the most commom way of creating array.
console.log(myArr); // o/p: [1, 2, 3, 4, 5]

let myArr2 = new Array(1, 2, 3, 4, 5); // The keyword Array is a constructor here or built in JS function. Inside Array() u can also pass the length of array u want to create but all elements initiated will be undefined, and obviously also u can create using the elements u pass inside the array.
console.log(myArr2);
let myArr3 = new Array(8);

console.log(myArr3); // o/p:  <8 empty items>

// want to add elements to the array....u can do it using push fucntion in js but it adds at end of the array. To add in front of array we use unshift operator.

myArr.push(6); // back me add krega
console.log(myArr);

// ************unshift operator in js ---> This operator is used to shift all elements by adding the given element in front of array....also it is good and handy tool for arrays having smaller length but it creates problem and is time consuming for large arrays...

myArr.unshift(9); // aage add krega
console.log(myArr);

// *****shift operator in js... This operator is used to remove the front element unlike unshift it does not take any parameter

myArr.shift() // aage se remove krega
console.log(myArr);

//other operators and functions for arrays in JS

console.log(myArr.includes(9)); // returns boolean value if the given ele is present or not in the array.
console.log(myArr.indexOf(9)); // returns index or -1 if not present

let newArr = [6,7,8,9];
newArr.join(myArr);
console.log(newArr);    


//slice and splice method

//slice is used to return the particular part of the array without actually including the range...but splice includes the range but also there is one more major difference b/w both...slice do not changes the original array while splice do changes.

const myarr = myArr.slice(1,3);
console.log(myarr);
console.log(myArr);

// but for splice

const myarr2 = myArr.splice(1,3);
console.log(myarr);
console.log(myArr); 

// seee the o/p of both...both have changed.




