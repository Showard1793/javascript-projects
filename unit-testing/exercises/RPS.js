function whoWon(player1,player2){

   if (player1 !== 'rock' && player1 !== 'scissors' && player1 !== 'paper'){
    return 'Player 1 made an error'
   }

   if (player2 !== 'rock' && player2 !== 'scissors' && player2 !== 'paper'){
    return 'Player 2 made an error'
   }

   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock '){
     return 'Player 2 wins!';
   }
 
   return 'Player 1 wins!';
 }

console.log(whoWon("rock","banana"));

 module.exports = whoWon