//eventListener     :Listen to the specific events to create interactive web pages
//                   events:click,mouseover,mouseout 
//                  .addEventListener(event,callback)

const box1 = document.getElementById("box1");
box1.addEventListener("click", event =>{
    event.target.style.backgroundColor = "Red";
    event.target.textContent = "Ouch !!😒";
});

box1.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent =  "plz dont 😢";
});

box1.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lime";
    event.target.textContent = "Click Me 😊";
});

const button = document.getElementById("click-button");
button.addEventListener("mouseover", event =>{
    box1.style.backgroundColor  =  "tomato";
    box1.textContent = " click if gay 🤷‍♀️";
});

button.addEventListener("click", event =>{
    box1.style.backgroundColor = "pink";
    box1.textContent = "🤦‍♂️🤷‍♀️🤦‍♀️";
});

button.addEventListener("mouseout", event=>{
    box1.style.backgroundColor = "lime";
    box1.textContent = "Click Me 😊";
    
})