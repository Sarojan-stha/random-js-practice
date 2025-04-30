let guessNum = prompt(`Guess a number between 1 and 100`);
guessNum = parseInt(guessNum);
let randNum = Math.random()*100;
randNum = Math.floor(randNum)+1;
console.log(randNum);

while(randNum !== guessNum){
    if(guessNum<randNum){
        alert(`try something higher than ${guessNum}`);
    }else{
        alert(`try something lower than ${guessNum}`);
    }
    guessNum = parseInt(prompt(`Guess a number between 1 and 100`));

}
alert(`BINGO You guessed the correcet number ${randNum}`);