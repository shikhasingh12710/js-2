(function chai(){
//named IIFE
    console.log(`DB CONNECTED`);
})(); // ; is used to end the invoked function

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Shikha")