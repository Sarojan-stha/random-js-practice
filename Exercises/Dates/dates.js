
const date = new Date();
console.log(date);

//get info from dates
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let dayOfWeek = date.getDay();//sunday starts from index 0

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
console.log(dayOfWeek);

//set the dates
year = date.setFullYear(2004);
month = date.setMonth(10);//january starts from 0
day = date.setDate(17);
hour = date.setHours(21);
minute = date.setMinutes(30);
second = date.setSeconds(30);

console.log(date);

//We can even compare dates
const date1 = new Date("2024-12-30");
const date2 = new Date("2025-1-1");

if(date1<date2){
    console.log(`Happy New year`);
    
}



