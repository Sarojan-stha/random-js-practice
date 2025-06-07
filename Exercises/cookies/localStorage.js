// LocalStorage methods 
// - .setItem(key, value) 
// - .getItem(Key) 
// - .clear() 
// - .removeItem() 
// - .key(index) 
// - .length ***note this is not a function***

let key = null;
let value = null;

key = prompt("Enter the key");
value = prompt("Enter the value");

localStorage.setItem(key, value);
console.log(`the value at key ${key} is ${value}`);
console.log(`the value of  key at index  0 is ${localStorage.key(0)}`);
console.log(`there are ${localStorage.length} key value pairs`); 


if(key === "remove"){
    console.log(`the value at key ${key} is ${value} is removed`);
    localStorage.removeItem(key);

}

if(key === "abort"){
    localStorage.clear();
    console.log(`All cleared`);
}


