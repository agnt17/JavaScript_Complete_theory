// Class in js: Class is not introduced in earlier versions of JS. But now class is the the special keyword in js and is used to create the objects in js.

//Now what we done in previous file is the same that we can do using classes and constructor....

class User{
    constructor(username, isLoggedIn, email, password){
        this.username = username;
        this.isLoggedIn = isLoggedIn;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
}

const user1 = new User("Aditya", false, "210108002@hbtu.ac.in", 123);
console.log(user1.encryptPassword());

// now if we want to do same shit, so we can do this using functions....

function User1(userName, isLoggedIn, email, password){
    this.userName = userName;
    this.isLoggedIn = isLoggedIn;
    this.email = email;
    this.password = password;

    User1.prototype.encryptPassword = function(){//this is the major change if we want to go through the traditional method 
        return `${this.password}abc`
    }
}

const user2 = new User1("Aditya", true, "adityagupta20042003@gmail.com", 1232)
console.log(user2.encryptPassword());   