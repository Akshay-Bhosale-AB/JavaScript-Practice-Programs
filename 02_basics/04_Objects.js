
//1.create Singleton object
//const tinderUser = new Object();      ------SingleTon Object-------


//2.Create object literal or non-singleton object
const tinderUser ={};               //  -----------non-Singleton object or object literal-------

tinderUser.id = "1254kgh";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "johndoe451@google.com",
    fullName:{
        userFullName : {
            fname : "John",
            lname : "Doe",

        }
    }
}

//console.log(regularUser.fullName.userFullName.fname);

//Combine multiple objects

const obj1 = {1:"a", 2 :"b"}
const obj2 = {3:"c", 4 :"d"}
const obj3 = {5:"e", 6 :"f"}
const obj4 = {7:"g", 8 :"h"}

//const objComb = {obj1,obj2,obj3};
//console.log(objComb);

// combine Using Assign method
//const objAsin = Object.assign({}, obj1,obj2,obj3,obj4);
//console.log(objAsin);

//Combine using spread method
const obj5 = {...obj1, ...obj2, ...obj3, ...obj4}
//console.log(obj5);

//             ******Imp when you working  with DB********
console.log(Object.keys(tinderUser));       // Use It, When you want to knows keys of object 
console.log(Object.values(tinderUser));     // Use It, When you want to knows Values of object
console.log(Object.entries(tinderUser));    // Use It, When you want to knows Entries of object
console.log(tinderUser.hasOwnProperty('isLogged'));     // Use It, When you want to check specific key of object 