const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman","flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  o/p-- [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// agar hum push kr k 2 array ko add krenge toh vo array k andhar array jese hi print hogi jese uper hai.
// or agar usse access krna hoga toh vo ek index per puri array aajaygi
// check kre
// console.log(marvel_heros[3]);

// agr array k andhar k array k element print krne hai toh hum ese krenge

// console.log(marvel_heros[3][1]);  \
// +++++++++++ iss tarekke se add ni kr skte array ko 

// -----------------------
// concat krnge hum ek array ko dusare aarray se

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// ** hum concat ka use 2 array k lye ker skte hai magar 2 se zada per  ni ...uss k lye hume spread ka use kerna padega ### chanch ka glass to todna fir uska chanch spread hona

// ------yeh hai spread ka code ....isse hum 2 se zada array add ker skte hai.
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// ---agar array k andhar array k andhar array ho ...usse ek array me kerna ho toh .....# flat ka use krnge neche dekho
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 
 7, [4,5]]]

 const real_another_array = another_array.flat(Infinity)
//  console.log(real_another_array);


//  ----quest for checking array or convert array 

// console.log(Array.isArray("sahil")); chceck krega array hai ya ni
// console.log(Array.from("sahil")); convert kr dega array me

// interesting point in object to arrray...
// console.log(Array.from({name:"sahil"}));   idhar ye object ko array me convert k lye bola hai ..toh yaha se confuse ho jayega ki key ko bnaye ya value ko ...#-- isslye ye empty array output deta hai

// convert variables to array 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

