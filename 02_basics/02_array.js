const marvel_heroes=["thor","Ironman","Spiderman"]
const dc_heroes=["Superman","flash","batman"]

// marvel_heroes.push(dc_heroes)   // isse array ke andar array aa jata hai 
                                   // push existing array pe hi work karta hai
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allHeroes=marvel_heroes.concat(dc_heroes)    // concat new array return karta hai isliye usko kahi store karana padta hai for access
// console.log(allHeroes)

const all_new_heroes=[...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Raj"))  // array hai ya nhi
console.log(Array.from("Raj"))   // array mein convert kar dega
console.log(Array.from({name:"Raj"}))  // intresting  => isme batana padega kiska array banana hai key or value'
                                       // agar nahi denge to empty [] return karega
                                                       
let score1=100                                    
let score2=200                                       
let score3=300  

console.log(Array.of(score1,score2,score3))  // return karta hai newarray, saare element jo ham dete hai usse