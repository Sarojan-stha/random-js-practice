/* nodeList */

const button = document.querySelectorAll("#myButton");

button.forEach(button =>{
    button.addEventListener("mouseover" ,event =>{
        event.target.style.backgroundColor = "Lime";
        console.log(button);
    })

})

button.forEach(button =>{
    button.addEventListener("mouseout" ,event =>{
        event.target.style.backgroundColor = "lightblue";
        event.target.textContent = "Clicked";

    })

})

button.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "red";
        event.target.textContent = "Clicked";
    })
})

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.id = "myButton";

document.body.appendChild(newButton);