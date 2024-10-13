
function sayMyName(){
    console.log("R")
    console.log("a")
    console.log("j")
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }


function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result

    return number1+number2
}

const result=addTwoNumbers(3,5)

// console.log("Result: ", result)


function loginUserMessage(username="saim"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("Raj"))
// console.log(loginUserMessage())
// console.log(loginUserMessage("Tabish"))


function calculateCartPrice(val1,val2,...num1){ 
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))
// console.log(calculateCartPrice(200,400,500,2000))  // 200=>val1, 400=>val2, so output is [500,2000]


const user={
    username:"Raj",
    age:19
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)
}

// handleObject(user)
handleObject({
    username:"saim",
    age:20
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,400,500,1000]))