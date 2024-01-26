
//Inheritance in js: Inheritance is a property in which a children class inherits the property from its parent class... we can do this 

class User{
    constructor(username, isLoggedIn, email, password){
        this.username = username;
        this.isLoggedIn = isLoggedIn;
        this.email = email;
        this.password = password;
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
}

// Now to inherit the properties of another class we use a special keyword called extend. Now what this does is that it inherits the data from 1 class to another class thus establishing parent child relationship.

// We also use super keyword to access the function values from parent class while earlier time we used call metho...see file 30.

// now suppose we want to create a instance of class that takes user class as its parent.


class Teacher extends User{
    constructor(username, email, password){
        super(username);   // this super keyword itself takes the this keyword and does all other computations.
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`course was added by ${this.username} having ${this.email}`);
    }
}

const Aditya = new Teacher("Aditya", "210108002@hbtu.ac.in", 123456);
Aditya.addCourse();