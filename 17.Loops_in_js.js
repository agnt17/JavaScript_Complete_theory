// u know about basic for and while loops...

// for of loop

// let arr = [1,2,3,4,5];
// for (const i of arr) {
//     console.log(arr[i]);
// }

// for of loop on objects

const myObject = {
  name: "Aditya",
  game: "Counter Strike",
};

// now how to iterate into a object using for of loop....below is the similar implementation wrt to maps on traversing the object values through for of loop but it will give an error becuase there another way

// for (const {key, value} of myObject) {
//     console.log(key, ':-', value);
// }

// Now the correct implemetation is by using for in loop

for (const key in myObject) {
  console.log(key); // through this we will get keys
}

//now how to get values
for (const key in myObject) {
  console.log(myObject[key]); //through this we will get values
}

//forEach loop ----> for each loop takes a callback function that is called for each element in the array providing both the elements and the index arguments.

const coding = ["java", "cpp", "php", "Swift", "javascript"];
// method 1 for for each loop using explicitly function definition
coding.forEach(function (item) {
  console.log(item);
});
//method 2 for for each loop using arrow functions

coding.forEach((item) => {
  console.log(item);
});

// object inside arrays and how to access them using foreach loop

const newCoding = [
  {
    name: "Java",
    extension: ".java",
  },
  {
    name: "C++",
    extension: ".cpp",
  },
  {
    name: "JavaScript",
    extension: ".js",
  },
];

newCoding.forEach((item) => {
  // here the item refers to each object inside the array.
  console.log(item.extension); // item.extension refers to the key extension in every object.
});

//this for each loop doesnt return any value
const values = newCoding.forEach((item) => {
  return item;
});

//clearly it does not returns any value that means if we want to some calculations and want to return it then it won't work...Thus we introduced Filter which helps us to filter values on basis of condition


// on file 19

