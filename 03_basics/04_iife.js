// Immediately Invoked Function Expressions (IIFE)



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();

// IIFE ke pahle agar kuch bhi code likha h to usme phle ke last mein semicolon(;) lagana padta hai for ending 

( (name) => {
    // unnammed IIFE
    console.log(`DB CONNECTED Two ${name}`)
})("Raj")  // with Parameter

// ()() => pahla wala bracket ke andar function rahta hai and second wala bracket uske execution ke liye hota hai