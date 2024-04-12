const name = "hitesh"
const repoCount = 50

// // console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[2]);
// console.log(gameName.__proto__); yeh object {} print krega


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 5)
// console.log(newString);  hites will print


const anotherString = gameName.slice(-8, -4)
console.log(anotherString);  
// hite will print  slice peecche se start krta hai string ko

const newStringOne = "   hitesh    "
// console.log(newStringOne); this line will print with space 
// console.log(newStringOne.trim()); this will trim the start space and end space from text

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

// console.log(url.includes('hitesh')) Ans. true
// console.log(url.includes('sundar')) Ans. false
//  The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

// console.log(gameName.split('-'));  yeh array me Answer print kr dega or '-' hata k ['hitesh','hc','com']