//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
// console.log(typeof score);
const scoreValue = 100.3
// console.log(typeof scoreValue);

const isLoggedIn = false;
// console.log(typeof isLoggedIn);

const outsideTemp = null;
// console.log(typeof outsidetemp);

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
// console.log(typeof heros);


const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);
// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++
//  Stack (primitive) , Heap (non-primitive)

 let myYoutubeName = "sahilRathoredotcom";

 let anotherName = myYoutubeName;

 anotherName = "sahil@google.com";

 console.log(anotherName);
 console.log(myYoutubeName);

 let userOne = {
    email : "sahil@google.com",
    upi: "user@ybl"
 }
 let userTwo = userOne

 userTwo.email = "user@google.com" ;
 console.log(userOne.email);
 console.log(userTwo.email);

