const display  = document.getElementById("display");

function appendToDisplay(input){
    display.value = display.value + input;
}

function clearDisplay(){
    display.value = " ";
}

function erase(){
    display.value = display.value.slice(0,-1);
}

function result(){
    display.value = eval(display.value);
}