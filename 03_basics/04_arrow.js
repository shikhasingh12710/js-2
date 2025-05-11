const user={
    username:"shikha",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to webiste`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username="Shikha"
//     console.log(this.username);
// }
// chai();

// const chai=function(){
//     let username="Shikha"
//     console.log(this);
// }
// chai();

const chai=()=>{
    let username="Shikha"
    console.log(this);
}
chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

//IMPLICIT RETURN
// const addTwo=(num1,num2)=>num1+num2;

// const addTwo=(num1,num2)=>(num1+num2);

// objects should always be in () for it to return a value
const addTwo=(num1,num2)=>({username:"Shikha"})

// console.log(addTwo(3,4));

const myArray=[2,5,6,7,8,9]
// myArray.forEach(()=>())