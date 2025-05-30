
const ironMan = document.getElementById("ironMan");
const button = document.getElementById("button");

button.addEventListener("click", event =>{

    if(ironMan.style.display === "none"){
        ironMan.style.display = "block";
        button.textContent = "HIDE";
    }
    else{
        ironMan.style.display = "none";
        button.textContent = "SHOW";
    }
})