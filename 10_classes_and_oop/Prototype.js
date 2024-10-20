// let myName = "Tabish     "
// const myChannel = "what     "

// console.log(myName.truelength)


let myHeroes = ["Thor","spiderman"]

let heroPower =  {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidey power is ${this.spiderman}`)
    }
}

Object.prototype.tabish = function(){
    console.log(`tabish is present in all objects`);
    
}

Array.prototype.heyRaj = function() {
    console.log(`Raj says hello`)
}

// heroPower.tabish()
// myHeroes.tabish()
// myHeroes.heyRaj()
// heroPower.heyRaj()



// inhertance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport={
    isAvailable: false
}

const TASupport = {
    makeAssignment: "js assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(teachingSupport,teacher)


let anotherUserName = "chaiAurCode        "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"raj".trueLength()