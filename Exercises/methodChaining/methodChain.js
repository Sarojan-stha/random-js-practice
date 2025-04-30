let username = prompt(`Enter you name.`);
// a program to convert first letter into uppercase, remaining lower case, and eliminate white spaces
//without method chaining
username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();

let remainingLetter = username.slice(1);
remainingLetter = remainingLetter.toLocaleLowerCase();

username = firstLetter + remainingLetter;
console.log(username);
