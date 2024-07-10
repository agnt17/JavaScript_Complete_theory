// getter and setter are used to get and set the values. If we want to change the value means what we have recieved if we want to change when it is accessed by any other person also getter and setters are used with each other they cant be used alone.

//eg: 

// class User{
//     constructor(username, password){
//         this.username = username;
//         this.password = password;
//     }
//     get password(){ 
//         return `${this.password}Aditya`
//     }
//     set password(value){
//         this.password = value
//     }
// }
// const newUser = new User("Aditya", 123);
// console.log(newUser.password)


// if we try to run this we are getting maximum call stack size exceeded error cause it is not clear who is setting the exact value of the password is it constructor function or is it the setter thus...there is a serious race condition b/w both and they alternatively try to set the values of password thus to avoid this shit we usually do is that we define other variables inside the set and get.

class User1{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    get password(){
        return `${this._password}abc`;
    }
    set password(value){
        this._password = value;
    }
}

const newUser2 = new User1("Aditya", 123);
console.log(newUser2.password);

//clearly this code runs as we just the password instances now getter and setter methods are only modifying their copy and not touching the original one and if anyone tries to fetch the values the password is secure and cant be accessed easily.