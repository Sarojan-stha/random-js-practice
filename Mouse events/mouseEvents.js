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
})