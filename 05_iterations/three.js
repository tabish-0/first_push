// for of

// ["", "", ""]
// [{}, {}, {}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings="Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


// Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United State if America")
map.set('IR',"Iran")
map.set('IR',"Iran")

// console.log(map)

// isse sara value aa jayenge key and value both
for (const key of map) {
    // console.log(key)
}


// isse key and value alag-alag access kar sakte hai
for (const [key,value] of map) {
    // console.log(key,':-',value)
}


const myObject={
    game1:'NFS',
    game2:'Spiderman'
}
// not iteratable like that
for (const [key,value] of myObject) {
    // console.log(key,':-',value)
}


// aise iterate nahi kar payege
for (const key in map) {
    console.log(key)
}