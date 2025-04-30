const textbox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn")
let temp;


submitBtn.onclick  = function(){
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp*9/5 + 32;
        result.textContent = temp.toFixed(2) + "°F";

   }
    else if(toCelcius.checked){
        temp = Number(textbox.value);
        temp = (temp-32)*5/9;
        result.textContent = temp.toFixed(2) + "°C";
    }
    else{
        result.textContent = "Please choose a conversion";
    }
}