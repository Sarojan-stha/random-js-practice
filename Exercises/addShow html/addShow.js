
const ironMan = document.getElementById("ironMan");
const button = document.getElementById("button");

button.addEventListener("click", event =>{

    if(ironMan.style.visibility === "hidden"){
        ironMan.style.visibility = "visible";
        button.textContent = "HIDE";
    }
    else{
        ironMan.style.visibility = "hidden";
        button.textContent = "SHOW";
    }
})