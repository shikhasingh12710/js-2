//singleton

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"Shikha",
    "full name":"Shikha Singh",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym)
// console.log(JsUser."full name")//error given

JsUser.email="1234@gmail.com";
// Object.freeze(JsUser);
JsUser.email="1234@microsoft.com";
// console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetingTwo());

