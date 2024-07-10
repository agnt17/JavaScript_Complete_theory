// Promises in js:
// Promises in JavaScript are like guarantees that something will be done, but not right now—sometime in the future. They are used to handle asynchronous operations, like loading data from a server, where you don't know how long it will take.
// The promise object represents the eventual completion or failure of an asynchronous operation and its resulting value. There are 3 types of promises states:
//1) pending ---> neither fullfilled, nor rejected
//2) fulfilled ---> meaning operation is successful
//3) rejected ---> meaning that operation is failed

//pending can be fulfilled or rejected with a reason(error)

// We mostly use the already made up promises but we will also learn how the promises are made

//How to create a promise:

const newPromise = new Promise((resolve, reject) => {
  //functional DB calls
  //Does async tasks
  // resolve and reject are 2 parameters passed while creating a promise
  setTimeout(() => {
    console.log("Async task is completed");
    resolve(); // resolve is directly related to then so if we wont execute this here the promise is not going to consumed
  }, 1000);
}); // A promise is created ....

// how to consume a promise

newPromise.then(() => {
  console.log("promise is consumed");
});

// this could be done in other way also
const newPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("yeah it is also working");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Boogey i consumed the promise!");
});

// now if we are genrating any content or some content is coming in form of data then we can fetch it

const newPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Aditya", email: "2101080022@hbtu.ac.in" }); //here objects ki jgh array wagera kuch bhi daal skte but u know objects hi aate hai database se.
  }, 1000);
}).then((user) => {
  console.log(`${user.username} and ${user.email}`);
});

// making use of error and using concept of chaining

const newPromise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Aditya", email: "2101080022@hbtu.ac.in" });
    } else {
      reject("Error: Something went Wrong!");
    }
  }, 1000);
})
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally promise is either resolved or rejected.");
  });

// here we had just done chaining because if we want to access username from the object user then we cant do it we have to do chaining and it is super easy u just have to return and then catch is as a parameter in next chaning and then print it...also at last use catch block to catch the errors. We should use finally also cause it is default and it says finally ur promise is either resolved or rejected but now it had finished which is very much important.

// now we can do all this then and catch and finally using async and await...both could be used easily.We have to create promise first and then we will able to access all.

const newPromise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Aditya", email: "2101080022@hbtu.ac.in" });
    } else {
      reject("Error: Something went Wrong!");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await newPromise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();

// now basically the thing is that await means it will wait for few time and then will execute we always use try and catch block so as to catch the error else it will produce error.

//await is put in front of every function which will cause us to wait...means promise will for sure make us wait but few things like data parsing to other format like parsing from string to json will also take some time and if we won't use await there we will get error

// fetch return us

// const newPromise6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javaScript", email: "210108002@hbtu.ac.in" });
//     } else {
//       reject("Error: Something went Wrong!");
//     }
//   }, 1000);
// });

async function consumePromise6() {
  try {
    const response = await fetch("https://api.github.com/users/agnt17"); // this will also return a promise means lga do await
    const data = await response.json(); // here u also have to use await cause this will also return a promise.
    console.log(data);
    console.log(response);
   } 
   catch (error) {
    console.log(error);
   }
}
consumePromise6();


// Why do we use promises?
// Better readability: Promises make asynchronous code easier to read and understand.
// Chaining: You can chain multiple asynchronous operations together.
// Error handling: Promises provide a clear way to handle errors.