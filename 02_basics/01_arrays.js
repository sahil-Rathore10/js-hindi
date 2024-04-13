// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[3]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() push kerne se last wala item hatt jayega

// myArr.unshift(9)
// console.log(myArr);  first me add kerdeta hai

// myArr.shift()
// console.log(myArr);  first me se delete kr deta hai

// console.log(myArr.includes(9));  yeh check krega ki yeh value array me hai ya nahi or true false check krega.

// console.log(myArr.indexOf(5)); yeh check krega ki iss index per kya value.

// const newArr = myArr.join()  ye array ko string me ker deta hai.

// console.log(myArr);
// console.log( newArr);  ye order array hata k bind kr deta hai or sirf number or datatype string bna deta hai --- 0,1,2,3,4,5


// slice, splice

console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3) slice array me se elements ko nikll ker ek alag array de deta hai...range k andhar or phli inclusive hoti hai or dusari exclusive islye output [1, 2] aya hai

console.log(myn1); 
console.log("B ", myArr);



// splice array me se uss array ki range wale element ko hata deta hai or ek nai array de deta hai.... issme dono inclusive form  hoti hai...ye original aaray me change ker k show ker dete hai..
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);