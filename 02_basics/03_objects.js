//Singleton
//Object.create

// Create symbol
const mySym = Symbol("Key1");

//Object Literals
//create object
const JsUser = {
    name : "Rahul",
    "full name" : "rahul gupta",
    age: 21,
    [mySym] : "MyKey1",
    location: 'rajasthan',
    email: "rahul@google.com",
    isLoggedIn : false,
    lastLoginDays : ['Monday','Saturdy']
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

//change object value
JsUser.email = "rahulgupta@chatgpt.com"
//console.log(JsUser["email"]);

//Freeze object value
//Object.freeze(JsUser) //after you freeze the object , value of object not changed
//try to change value of email
JsUser.email = "rahulgupta456rg@google.com"
//console.log(JsUser["email"]);
//console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS User.");
}
JsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetings());

console.log(JsUser.greetingsTwo());