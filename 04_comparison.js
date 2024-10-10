// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)


console.log("2">1)  // "2" ko convert karke check karta hai that's why true
console.log("02">1)

// aise conversion ko avoid karna chahiye

console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)

console.log("2" === 2)


/*
the reason is that an equality check == and comparison >,<,>=,<=
work differently.
comparisons convert null to a number, treating it as 0
that's why null>=0 is true and null>0 is false
*/
