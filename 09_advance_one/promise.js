const promiseOne = new Promise(function(resolve,reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task completed')
        resolve()  // ye likhna padega agar .then ke andar wale ko execute karna h to
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed")  // promise mein resolve() likhne se ye code chalega
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})


const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve({username: "chai", email: "chai@example.com"})  // ye .then ke function ke andar chala jayega
    },1000)
})
promiseThree.then(function(user) {  // resolve mein jo likhege wo yaha ayega function mein
    console.log(user)
})


const promisefour = new Promise(function(resolve,reject) {
    setTimeout(function (){
        let error = true
        if(!error){
            resolve({username: "Tabish", password: "123"})
        }
        else{
            reject("ERROR: Something went wrong") // ye .catch ke function ke andar chala jayega
        }
    }, 1000)
})
promisefour
.then((user) => {
    console.log(user)
    return user.username  // ye return karega 2nd wale .then ke function me jo iske sath chaining banaya hai
}).then( (username) => {  // upar ka return yaha ayega
    console.log(username)
}).catch(function (error) {  // reject mein jo likhege wo yaha ayega function mein
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise( (resolve,reject) => {
    setTimeout( () => {
        let error=true
        if(!error){
            resolve({username: "javascript", password: "123"})  // agar ye condition chala to yahi jayega response mein
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){    // try and catch use hota h error ko sambhalne ke liye 
    try{
    const response = await promiseFive
    console.log(response)
    } catch(error){
        console.log(error)
    }
}
consumePromiseFive()



// async function getAllUsers(){
//     try{
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()  // yaha (await) use karna padega kyuki ( response.json() ) convert mein time lagta hai
//     console.log(data)
//     }
//     catch(error){
//         console.log("E",error)
//     }
// }
// getAllUsers()



fetch('https://api.github.com/users/tabish-0')
.then( (response) => {
    return response.json()   // 1st .then() ke baad hi 2nd .then() start hogi
}).then( (data) => {
    console.log(data)
}).catch((error) => console.log(error))