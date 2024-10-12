// const tinderUser=new Object()   // singleton object hai

const tinderUser={}      //Non-singleton object hai

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Raj",
            secondname:"Tabish"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj5={5:"a",6:"b"}

// const obj3={obj1,obj2}  // obj3 mein dono obj1 and obj2 aa jayenge 2 alag object ban kar add nahi honge
// console.log(obj3)   //same array ki tarah


// const obj4=Object.assign({},obj1,obj2,obj5)  // isse saare sources target mein copy ho jate hai
/*
    {} => target ki tarah kaam karta hai saare sources isme copy hote hai ,  ye pahle likhna accha hota hai
    obj1,obj2,obj5,etc... => sab source hai jinke value copy hote hai target mein
 */


const obj4={...obj1, ...obj2, ...obj5};   // spread => spread ho kar combine ho jata hai 
// console.log(obj4)


const users=[
    {
        id:1,
        email:"r@gmail.com",
    },
    {

    },
    {

    }
]

users[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))   // object ke keys ko deta h array ke form mein in string datatype 
// console.log(Object.values(tinderUser))  // object mein stored values ko deta h array ke form mein in respective datatypes
// console.log(Object.entries(tinderUser))  // har ek key-value pair ko array mein store karke array return karta hai .. [[key,value],[key,value]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))// ye batata h ki uss object ke pass wo property(key) h ya nhi



const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor}=course  // destructured ho jata hai and, only instructor likh kar course object ke courseInstructor ko access kar sakte hai

// console.log(courseInstructor)
console.log(instructor)



// {
//     "name": "hitseh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {}
]