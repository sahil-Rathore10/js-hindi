// Dates

// let myDate = new Date()
// console.log(myDate.toString()); o/p Fri Apr 12 2024 09:58:41 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); o/p- Fri Apr 12 2024
// console.log(myDate.toLocaleString()); o/p- 4/12/2024, 9:59:26 AM
// console.log(typeof myDate); o/p- object (typeof date is object because uska instance banna padta hai)


// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) o/p - 1/23/2023, 5:03:00 AM4

// let myCreatedDate = new Date("2023-01-14") o/p- 1/14/2023, 12:00:00 AM

// let myCreatedDate = new Date("2023-00-14") o/p- invalid date
let myCreatedDate = new Date("01-14-2023")
//  o/p-1/14/2023, 12:00:00 AM

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);  o/p- yeh 1970 se abi tk ka time miliseconds me dega 1712916339885  ese

// console.log(myCreatedDate.getTime());  o/p- hum isse compare kr skte h given date ko 1970 se

// console.log(Math.floor(Date.now()/1000)); o/p- isme time miliseconds me ayega or current date dega but isse hum /1000 kr k seconds me chnage kr skte hai....or Math.floor se hum round off kr dnge

let newDate = new Date()
// console.log(newDate);  o/p- given current date
// console.log(newDate.getMonth() + 1); o/p- given current month jese abi april hai to 4 
// console.log(newDate.getDay()); o/p ye hume 5 dega kyu ki aj friday hai ......mondy ko 1 value tues ko 2 ese....

// `${newDate.getDay()} and the time `  iss tareeke se hum print krwa skte hai apni date ko

// newDate.toLocaleString('default', {
//     weekday: "long",   issme ap format kr skte ho jese weekday me monday pura monday chaiye mon ni ..... date apko kese format me chaiye yee sb humm format kr skte hai bade aasani se
    
// })