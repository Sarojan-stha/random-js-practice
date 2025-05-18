//closures also help to keep the variable private 
//example without using closure
/* let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
}

function deacreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
}

function getScore(){
    console.log(`the score is ${score}pts`);
    
}
    score=1000000;//this afffects the privacy score can be altered easily

increaseScore(5);
increaseScore(10);
deacreaseScore(5)
deacreaseScore(1);
getScore(); */

//example 2 using closure property

function updateScore(){

    let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
}

function deacreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
}

function getScore(){
    console.log(`the score is ${score}pts`);
    
}

    return {increaseScore,deacreaseScore,getScore};
}

const game = updateScore();
game.increaseScore(10);
game.deacreaseScore(5);
game.increaseScore(1);
game.getScore();
