const userEmail="hncdndj@googlr.com"

// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Dont't have user email")
// }

//false
//false,0,-0,BigInt,0n,"",null,undefined,NaN

//truthy values
// "0","false"," ",[],{},function(){}

// if(userEmail.length==0){
//     console.log("Array is Empty");
// }

const emptyObj={}

// if(Object.keys(emptyObj).length==0){
//     console.log("Object.empty");
// }

//Nullish coalescing Operator(??):null undefined

let val1;
// val1=5??10;
// val1=null??10;
// val1=undefined??15;
val1=null??10??20
console.log(val1);

//TERNARY
const iceTeaPrice=100
iceTeaPrice>=80?console.log("less than 80"):console.log("more than 80");

