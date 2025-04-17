//Primitive
//7:Strings,Number,Boolean,Null,undefined,Symbol,BigInt,

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);
// const bigNumber=347349238434035384023489358032n;

//Non-Primitive(Reference type)
//Arrays,Objects,Functions


const heroes=["shaktiman","naagraj","doga"]
let myObj={
    name:"shikha",
    age:21,
}

const myFunction=function(){
    // console.log("hello there")
}

// console.log(typeof bigNumber)
// console.log(typeof outsideTemp)
// console.log(typeof myFunction)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive),Heap(Non-Primitive)

let myYoutubeName="ShikhaSingh"
let anotherName=myYoutubeName
anotherName="SnehalSingh"
console.log(myYoutubeName);
console.log(anotherName);

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne;
userTwo.email="123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);






