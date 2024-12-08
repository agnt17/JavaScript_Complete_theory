// objects in js can be done by 2 ways viz:

// object from constructor and objects from literal

// Object from constructor

let obj1 = Object.create({ name1: Symbol("symbol") }); // creating a object name using 'Object' constructor

console.log(obj1["name1"]); // accessing the object value using it key, from this method of accessing u can access even if the key data type is of any type....This is called square notation.

 console.log(obj1.name1); // another way of accessing the object value and it is the most used one.

// u can thought of an object as an array bs itna frq hai ki arrays me hum apne hisab se indexing kisi bhi data type ki nhi kr skte means array me kya scene tha ki wha indexing keval 0, 1, 2 in form me hoti thi but yha pr indexing string array number or infact object jaisi bhi ho skti hai.

// freeze function
let obj2 = {
  name: "Aditya",
  Field: "IT",
  Badges: "Cf",
  alias: ["aa", "bb", "cc"],
  email: "a.com",
};
console.log(obj2);
obj2.email = "ab.com";
console.log(obj2);

Object.freeze(obj2);
obj2.email = "aba";
console.log(obj2); // clearly after freezing the value of email doesnt changes.

// how does function works in object and if we want to access the objects name using this keyword then how we gonna do that
// (obj2.greeting = function () {
//   console.log("Hello js user");
// })();

// // (obj2.greetingtwo = function(){
// //     console.log(`Hello js user, ${this.name}`);
// // })();

// obj2.greetingtwo = function () {
//   console.log(`Hello js user, ${this.name}`);
// };
// console.log(obj2.greetingtwo());


let Array_module = [  
  {
    name: "Aditya",
    Field: "IT",
    Badges: "LC",
    alias: ["a1", "Bc", "gd"],
    email: "aaa.com",
  },
  {
    name: "anurag",
    Field: "IT",
    Badges: "c0l",
    alias: ["Pikapi", "aa", "t8aaaa8"],
    email: "Te.com",
  },
  {
    name: "nau",
    Field: "lc",
    Badges: "lc",
    alias: ["l", ";", "natural_cause"],
    email: "mc@mm.com.com",
  },
];

let data1 = Array_module[0].Field; // using this dot notation we can accesss the values of an object from the array
console.log(data1);

// how to access keys and values from an object  ---> answer will be return in form of arrays....keys will be 0,1,2... since keys do indexing and values will be as usual what is there in the object.

let data_keys = Object.keys(Array_module);
let data_values = Object.values(Array_module);
console.log(data_keys); 
console.log(data_values);