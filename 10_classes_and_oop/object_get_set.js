const User={
    _email: 'h@hc.com',
    _password: "abc",

    get email(){    // get yaha email ko method nahi rhne deta hai
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}

const tea = Object.create(User)

console.log(tea.email)

// via object getter and setter