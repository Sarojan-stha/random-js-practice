/* //Normal method using sort
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
console.log('before shuffle');
console.log(cards);


cards.sort(()=> Math.random() - 0.5);

console.log("after shuffle",cards);
 */

//Fisher-Yates algorithm
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
console.log(`The cards before shuffle`,cards);


function shuffle(cards){
    for( let i=cards.length-1;i>0;i--){
        let randIndex = Math.floor(Math.random()*i);
        [cards[i],cards[randIndex]] = [cards[randIndex],cards[i]];//destructuring array
    }
    console.log(`The cards after shuffle`,cards);

}

shuffle(cards);
