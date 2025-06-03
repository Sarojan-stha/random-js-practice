const button = document.querySelectorAll(".myButton");

button.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    })
});

button.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    })
});

button.forEach(button =>{
    button.addEventListener("click", event =>{
            event.target.classList.add("disabled");
            event.target.textContent = "Disabled";        
        })
        });
