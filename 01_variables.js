const accountId=144553
let accountEmail="learningjavascript@gmail.com"
var accountPassword="12345"
accountCity="Mirzapur"   // this is possible but prefer never to use it
let accountState

// accountId=2   // not allowed
accountEmail="working@gmail.com"
accountPassword="323232"
accountCity="Haryana"

console.log(accountId);

/*
Prefer not ot use var
because of issue in functional scope and block scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])