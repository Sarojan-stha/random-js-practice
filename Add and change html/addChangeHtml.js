//to add and change html element

// 1.CREATE AN ELEMENT
const firstH1 = document.createElement("h1");
const lastH1 = document.createElement("h1");

const box1 =  document.createElement("h2");
const box2 =  document.createElement("h2");
const box3 =  document.createElement("h2");
const box4 =  document.createElement("h2");

const b12 =  document.createElement("h2");
const b23 = document.createElement("h2");
const b34 = document.createElement("h2");

// 2.ASSIGN VALUE TO THE 
firstH1.textContent = "First child";
lastH1.textContent  = "last child";
box1.textContent = "Inside box 1"
box2.textContent = "Inside box 2"
box3.textContent = "Inside box 3"
box4.textContent = "Inside box 4"
b12.textContent = "between box 1 and 2";
b23.textContent = "between box 2 and 3";
b34.textContent = "between box 3 and 4";

firstH1.style.backgroundColor = "lightBlue";
lastH1.style.backgroundColor = "lightpink";

box1.style.color = "green";
box2.style.color = "green"
box3.style.color = "green";
box4.style.color = "green";



b12.style.color = "red";
b23.style.color = "red";
b34.style.color = "red";





// 3.APPPEND TO DOM
document.body.prepend(firstH1);//add as a first child 
document.body.append(lastH1);//adds as last child
document.getElementById("box1").append(box1);//adds inside the box
document.getElementById("box2").append(box2);
document.getElementById("box3").append(box3);
document.getElementById("box4").append(box4);

const boxx2 = document.getElementById("box2")
document.body.insertBefore(b12, boxx2);

const boxx3 = document.getElementById("box3");
document.body.insertBefore(b23, boxx3);

document.body.insertBefore(b34, document.getElementById("box4"));

// 4.REMOVE ELEMENT