const user={
    username:"Raj",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`) 
        console.log(this)
    }
    
}
// this => current context ko refer karta hai

// user.welcomeMessage()
// user.username="saim"
// user.welcomeMessage()

// console.log(this)  // ye empty {} dega , kyuki isko pata nhi kisko refer karna hai

// function chai(){
//     let username="Raj"
//     console.log(this)   // bhot saari values dega
//     console.log(this.username)  // function ke andar aise use nahi kar payenge jaise object mein karte they
// }

// chai()


// const chai=function(){
//     let username="Raj"
//     console.log(this.username)
// }







const chai=() => {
    let username="Raj"
    console.log(this)
}

// chai()


// const addTwo=(num1,num2) => {  
//     return num1+num2      // explicit return, jab return lagana pad raha hai
// }

// const addTwo=(num1,num2) =>  num1+num2   // implicit return, jab return nahi lagana pad raha hai

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"Raj"})

// {} => return keyword likhna hi padega
// () => return keyword nahi likhna padega


console.log(addTwo(3,4))


// const myArray=[2,5,3,7,8]

// myArray.forEach()