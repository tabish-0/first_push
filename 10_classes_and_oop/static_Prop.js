class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){  // sabko iska access nahi dena h that's why use of (static)
        return `123`
    }
}

const raj = new User("Raj")
// console.log(raj.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
// iphone.logMe()
console.log(iphone.createId())