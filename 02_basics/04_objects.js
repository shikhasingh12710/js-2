// const tinderUser=new Object() //singleton object
const tinderUser={}; // non-singleton object

tinderUser.id="123abc"
tinderUser.name="Shikha"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shikha",
            lastname:"choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"a",
    4:"b",
}

// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3={...obj1,...obj2};
// console.log(obj3);

const users=[
    {
        id:1,
        email:"hhhh2gmail.com"
    }
]

// users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'))


const course={
    coursename:"jas in hindi",
    price:"999",
    courseInstructor:"Shikha"
}
// course.courseInstructor

const{courseInstructor:instructor}=course
console.log(instructor)

// const navbar=({company})=>{

// }
// navbar(company="hitesh")





