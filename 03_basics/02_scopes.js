// var c=300;
let a=300;
if(true){
    let a=10;
    const b=20;
    // console.log(a);
    // c=30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Shikha"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    // two();
}
// one();

if(true){
    const username="Shikha";
    if(username=="Shikha"){
        const website=" youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++++interesting++++++++++++++++++
addOne(5);
function addOne(num){
    return num+1;
}
// console.log(addOne(5));

addTwo(5);
const addTwo=function(num){
    return num+2;
}
// addTwo(5);