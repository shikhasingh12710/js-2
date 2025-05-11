//for

// for(let i=0;i<10;i++){
//     if(i==5){
//         console.log("5 is best");
//     }
//     console.log(i);
// }

// for(let i=0;i<=10;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=0;j<=10;j++){
//         console.log(`inner loop ${j}`);
//     }
// }

// let myArray=["flash","batman","superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element);
// }

//break and continue

// for(let index=0;index<=20;index++){
//     if(index==5){
//         console.log("5 detected")
//         break
//     }
//     console.log(`Value of i is ${index}`);
// }
for(let index=0;index<=20;index++){
    if(index==5){
        console.log("5 detected")
        continue
    }
    console.log(`Value of i is ${index}`);
}