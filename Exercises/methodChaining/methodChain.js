let username = prompt(`Enter you name.`);
// a program to convert first letter into uppercase, remaining lower case, and eliminate white spaces
/*without method chaining
username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();

let remainingLetter = username.slice(1);
remainingLetter = remainingLetter.toLocaleLowerCase();

username = firstLetter + remainingLetter;
console.log(username); */

//using method chaining
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);
console.log(`hello`);


