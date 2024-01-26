// Call method in js is used so thay when there is a function call inside a function itself then we need to hold its reference because u know if we are not holding that reerence then u cant retain the value from that function...See a example below to understand more clearly.


function getUserName(userName){
    this.userName = userName;
}

function getDetails(userName, isLoggedIn, email){
    this.userName = getUserName(userName); // major issue
    this.isLoggedIn = isLoggedIn;
    this.email = email
}
const newEmp = new getDetails("Aditya", false, "210108002@hbtu.ac.in")
console.log(newEmp);

//o/p: getDetails {
//   userName: undefined,
//   isLoggedIn: false,
//   email: '210108002@hbtu.ac.in'
// }

//here we got username as undefined although we have defined that shit already but the thing is that as soon as thayt getUserName function iscalled what we see is that its context get deleted from the call stack and thus all of its variables also...to retain that variables what we will say is that getUserName please use out "this" insetad of urs so that we can easily hold ur values. 


function getUserName1(userName){
    this.userName = userName;
}

function getDetails1(userName, isLoggedIn, email){
    getUserName1.call(this, userName); // our major change is here as we changed the calling meachnism and due to this mechanism it holds values of its inside functions. We are passsing this of our current context thats why we are not wrting it on parameters of that function.
    this.isLoggedIn = isLoggedIn;
    this.email = email
}
const newEmp1 = new getDetails1("Aditya", false, "210108002@hbtu.ac.in")
console.log(newEmp1);


//  Now it works completely fine.