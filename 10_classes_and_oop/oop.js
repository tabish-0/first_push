const user = {
    username: "Tabish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)    // this -> current context ki baat karta hai
        // console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


// new keyword construction function hai, naya context banane ke kaam ata h

// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this     // by default return hoga hi likhe ya nahi likhe, same hai
}
// new -> ek construction function h jo naya instance(copy) deta h aur kuch bhi change karege to original effect nahi hota
const userOne = new User("Tabish",7,true)
const userTwo = new User("chai aur code",16,false)   // ye value overWrite kar jayegi 
console.log(userOne.constructor)    // userTwo wali value overwrite kar gyi that's why wahi value (userTwo) print hogi iss case mein
// console.log(userTwo)