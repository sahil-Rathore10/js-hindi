// let score = "33abc"  convert toh ho jayega per output NaN aata
// let score= null ye b convert ho jayega but output 0 ayega
// let score= undefined   ye b convert ho jayega but output NaN ayega
// let score= true convert ho jayega but output 1 ayega
// let score="sahil" output NaN ayega but convert ho jayega number me
// let score = 33

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// let isLoggedIn = 1 ture ayega output convert ho kr
// let isLoggedIn = "" false ayega answeer convert ho kr
let isLoggedIn = "sahil"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//  1 => true ; 0 => false
//  "" => false
//  "sahil" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)


// ----------------------operationss ---------------------------

let value = 3;
let negvalue = -value;
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " sahil";

let str3 = str1 + str2;
// console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");

// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// ecma script ki guide lines for operation
// console.log(3+ 4 * 5 % 3);

//  console.log(+true);  true+ not allow
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
