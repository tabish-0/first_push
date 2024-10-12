let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(typeof myDate)


// let myCreatedDate=new Date(2024,9,11)   // yyyy mm dd
// let myCreatedDate=new Date(2024,9,11,5,3) 
// let myCreatedDate=new Date("2024-10-11") 
let myCreatedDate=new Date("10-11-2024") 

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000)) // important

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

//  `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})