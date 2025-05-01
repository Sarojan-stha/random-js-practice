
function diceRoller(){
    const numOfDice = document.getElementById("numOfDice").value;
    const rollDice = document.getElementById("rollDice");
    const result = document.getElementById("result");
    const diceImage = document.getElementById("diceImage");
    let values = [];
    let images = [];
    let randNum;
    for(let i=0;i<numOfDice;i++){
        randNum = Math.floor(Math.random()*6) + 1;
        values.push(randNum);
       images.push(`<img src="dice images/${randNum}.png" id="potChakka" alt = "img">`);
    }
    result.innerHTML = `dice :${values.join(",")}`
    diceImage.innerHTML = images.join(" ");

    console.log(numOfDice);

}