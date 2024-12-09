

// New keyword in js: Used to create a seperate instance.


function User(user, loginCount, isLoggedIn) {
    this.user = user;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

function User(user, loginCount, isLoggedIn) {
    this.user = user;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}


const user1 = User("Aditya", 32, false);
const user2 = User("khokhar", 32, false);
console.log(user1);

 //the expected o/p should be {"Aditya", 32, false}; But it is actually override by user2 details...why this happended cause  we are working on old copies and repainting them again and again and this will result into Havoc thus we need to create a new instance each time to get saved our data in new instance which could be achieved by using new keyword.


 function User1(user, loginCount, isLoggedIn) {
    this.user = user;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

function User1(user, loginCount, isLoggedIn) {
    this.user = user;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const user3 = new User("Aditya", 32, false);
const user4 = new User("khokhar", 32, false);
console.log(user3); // Clearly we got our desired o/p thus we should always use the new keyword if we are referring to same function again and again

//More about New Keyword: 

//Whenever u use new keyword an empty instance is created {} and after this a constructor function is called and then it packs all values and give it away and while passing always make sure to use this keyword so that atleast ur function understands what the things u are working with