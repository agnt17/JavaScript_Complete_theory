
// filter function in js: This fun only works with arrays. This is a higher order function that returns a new array out of original array and contains element that follows certain order. 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const newNums = myNums.filter((item) => {
    return item > 4                              // again here we started scope so we have to write return else an empty array will be returned.
});
console.log(newNums); //o/p : [5,6,7,8,9];

//chaining in js
//We can use subsequent map and filter one after another

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const MyArray2 = myArray
                .map((item)=>{
                    return item*10;
                })
                .map((item) => {                  //2nd map used as a form of chaining.
                    return item + 1;    // the value returned here is equal to calulated value from previous map function.
                })
console.log(MyArray2);
//o/p: [11, 21, 31, 41, 51, 61, 71, 81, 91]

const myArray3 = MyArray2.filter((item)=>{
    return item>50;               
})
console.log(myArray3)    // o/p: [ 51, 61, 71, 81, 91 ].....which is expected.
  
let newAray = myNums.filter((item)=>{
    console.log(item/2);
})

//Reduce function in js ----------> This function is basically is used to reduce the array into single value. It iterates over each element of the array, applying a provided callback function and accumulating the result.

const myArr4 = [1,2,3,4,5,6,7,8,9];
// functional method
const myTotal = myArr4.reduce(function(acc, currval){
    return acc+currval;
}, 0) // 0 is the initial value
console.log(myTotal);

//arrow function method: 
const myTotal2 = myArr4.reduce((acc, currval)=>{
    return acc+currval;
})
console.log(myTotal2)

//clearly o/p from both of the codes is same.

//now this reduce is used like in cart as we can sum total price in all items of the cart.
//eg:

const courses = [
    {
        Course: "Competative Programming Complete Course with notes",
        Price: 3999,
    },
    {
        Course: "Data Structures and Algorithms Complete Course with notes",
        Price: 5999,
    },
    {
        Course: "Data Science Complete Course with notes",
        Price: 12999,
    },
    {
        Course: "Full Stack Web Development Complete Course with notes",
        Price: 4999,
    },
    {
        Course: "Python for machine learning Complete Course with notes",
        Price: 7999,
    }
]
// now suppose this is the items on ur cart and u want to find out the total price.

const totalPrice = courses.reduce((acc, item)=>{
    return acc + item.Price
}, 0);

console.log(totalPrice);
