// singleton -> constructor se declare karte hai tab banta hai

// Object.create  // constructor method ke through declare karna



// object literals

// literal se kabhi bhi singleton nahi banta hai

const mySym=Symbol("key1")

const JsUser={
    name:"Raj",
    "full name":"Md Tabish Ansari",  // aise bhi likh sakte hai
    [mySym]:"mykey1",  // symbol ko aise hi likhte h bracket me
    age:19,
    location:"Hisar",
    email:"raj@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)    // jyada tar ham . se hi access karege but kuch cases mein waise nhi hota to niche wale tarike se karege
// console.log(JsUser["age"])  // ye accha tarika hai, aise hi karna chahiye
// console.log(JsUser["full name"])  // bas aise hi access kar sakte hai
// console.log(JsUser[mySym])  // aise hi access karte h symbol ko


JsUser.email="raj@chatgpt.com"
// Object.freeze(JsUser)    // isse object freeze ho jata h aur usme ham kuch bhi changes nahi kar pate hai
JsUser.email="raj@microsoft.com"
// console.log(JsUser)


JsUser.greeting=function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`)  // this => same object ke values ko refer karta hai
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())