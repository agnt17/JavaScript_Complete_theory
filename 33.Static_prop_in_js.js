// Static Prop or property in js: This property is used to restrict the access of all functions or methods inside the class...it is done so as we could decide what amount of sharing is enough to share...

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

    static createId(){ // now it can't be accessed easily.
        return `123`
    }
}

const aditya =  new User("Aditya");
console.log(aditya.createId()); // claerly is says it is not a function but actually it is a function 