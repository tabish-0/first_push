// var c=300

let a=300

if(true){
    let a=10
    const b=20
    // console.log("INNER: ",a)
}


// console.log(a)
// console.log(b)
// console.log(c)

/*
node mein and console mein both are different for
global scope
*/


function one(){
    const username="Raj"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

if(true){
    const username="Raj"
    if(username=="Raj"){
        const website=" youtube"
        // console.log(username+website)
    }
    // console.log(website)
}

// console.log(username)


// ******************************** Interesting ****************

console.log(addone(5)) // ye to run ho jayega

function addone(num){
    return num+1
}


addTwo(5)  //kyuki ham values ko store kar rahe so error dega

const addTwo=function(num){
    return num+2
}
