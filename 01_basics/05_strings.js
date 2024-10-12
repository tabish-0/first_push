const name="raj"
const repCount=50

// console.log(name+repCount+" value")

console.log(`hello my name is ${name} and my repoCount is ${repCount}`)  // Use this always 

const gameName=new String(`hi-raj-hello`)

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('j'))

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-6,2)
console.log(anotherString)

const newStringOne="     raj    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://raj.com/raj%20learning"

console.log(url.replace('%20','-'))

console.log(url.includes('raj'))

console.log(gameName.split('-'))
