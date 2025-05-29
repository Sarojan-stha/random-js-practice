//eventListener     :listens for the events to create change in web pages 
//                   events:keydown, keyup 
//                   document.addEventListener(event, callback)

const box = document.getElementById("box");
const movement = 10;
let xCord = 0;
let yCord = 0;

document.addEventListener("keyup", event =>{
            box.style.backgroundColor = "lightBlue";
            box.textContent = "😌";

        });

document.addEventListener("keydown", event =>{
      
    if(event.key.startsWith("Arrow")){

        box.style.backgroundColor = "orange";
        box.textContent = "🥵";

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                yCord -= movement;
                console.log("working");
                
                break;
            case "ArrowDown":
                yCord += movement;
                break;
            case "ArrowLeft":
                xCord -= movement;
                break;
            case "ArrowRight":
                xCord += movement;
                break;
            
        }

        box.style.top = `${yCord}px`;
        box.style.left = `${xCord}px`;
    }   

});