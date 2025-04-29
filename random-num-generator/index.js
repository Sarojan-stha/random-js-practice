
const submit=document.getElementById("submitBtn");

submit.onclick = function(){
    const maxNum=parseInt(document.getElementById("maxNum").value);
    const minNum=parseInt(document.getElementById("minNum").value);
    let randomNum = Math.random()
    randomNum = Math.floor(randomNum*(maxNum-minNum))+minNum;
    alert(`Ranndom number is ${randomNum}`);
}