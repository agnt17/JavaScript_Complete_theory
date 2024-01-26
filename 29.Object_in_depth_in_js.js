// Object is JS: You know everything in javascript is Object, now what this really means is that tum jo bhi kr lo end me use jb open krte jaoge then it will come out to be object. To see this

const Myarr  =  [1,2,3,4];
console.log(Myarr);

// run this same code on any of the browsers console window   ---------> now what u will se is that since js is a prototypic language means at each level we will get prototypes and when we go into that level of detailing we again get into prototype....inside each prototype we got different types of element like here we first got an array and then that prototype contains all type of array functions and methods and inside that we got another prototype and that is object prototype that means array itself an object. 

//Infact function itself is an object 

function myarr2(){
    console.log("Aur bata kya haal hai beta!!");
}
myarr2();

// now what does then object point to so it basically point out to ----> null