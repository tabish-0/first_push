// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

/*
JavaScript dynamically typed language hai. Matlab, variables ka type 
runtime pe decide hota hai, aur aapko explicitly declare karne ki zarurat nahi hoti
*/

const name="raj"
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail

const id = Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber=345355466493839n  // bigint

// Reference (Non primitive)

// Array, Objects, Functions

const heros=["shaktiman","nagraj","doga"]

let myObj={
    name:"raj",
    age:19,
}

const myFunction=function(){
    console.log("Learning process")
}

console.log(typeof id)



// Return type of variables in JavaScript


// 1) Primitive Datatypes

//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes

//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


/*******************************************************/

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename="hiteshChaudharydotcom"

let anothername=myYoutubename
anothername="chai aur code"

console.log(myYoutubename)
console.log(anothername)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)

// stack => value hi milta original mein change nahi hota kyuki copy milta hai
// heap => reference milta hai jo change karte hai wo direct original mein change hota hai