// const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);  o/p- [Number: 100]

// console.log(balance.toString().length); o/p- length of 100
// console.log(balance.toFixed(1)); o/p- decimal k bad 1 place tak value dega

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3)); o/p- 124 decimal ki value ko round off kr denge 3 place tak.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  o/p - arrange in indian standard.

// +++++++++++++++math+==========================

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// random sirf 0 se 9 tak hi number deta hai randomly
console.log(Math.random());
// console.log(Math.random()*10);
// console.log((Math.random()*10) + 1); (agar kabhi 0 agya toh uuse 1 se plus kr dnge)

// console.log(Math.floor(Math.random()*10) + 1); (floor function usse round off kr k single digit de dega)

// Agar aap ko kissi or range me number print krane hai toh 

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// this code will be  help in building games ... from range 10 to 20 .. and it will give random number between 11 to  20 .... phle random number banega 0.60706479 fir usme * 11 higa [max - min + 1] isse or yeh 6.67771269 ban jayega.... fir Math.floor usse round off kr dega 6 bna dega..... fir +min value add hogi 6 me or usse 16 bna degi simple..


