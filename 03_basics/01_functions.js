function sayMyName(){
    console.log("S");
    console.log("I");
}
// sayMyName()

// function addTwoNumbers(number1, number2){ // parameters
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){ // parameters
    // let result=number1+number2;
    // return result;
    return number1+number2;
}
const result=addTwoNumbers(3,null); //arguments
// console.log("Result: ",result);

function loginuserMesaage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginuserMesaage("Shikha"))

function calculateCartPrice(val1,val2,...num1){ //rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,700))

const user={
    username:"Shikha",
    price:99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username:"Sam",
    price:499
});

const myNewArray=[200,300,400,600,100]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,600,100]));
