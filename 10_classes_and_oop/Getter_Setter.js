class User {
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}Raj`
    }
    set password(value){
        this._password = value
    }

    set email(value){
        this._email= value
    }

    get email(){
        return this._email.toUpperCase()
    }
}

const tabish = new User("raj@gmail.com","xyz")
// console.log(tabish.password)
console.log(tabish.email)