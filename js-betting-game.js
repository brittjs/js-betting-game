"use strict";
//player starts off with bankroll = 100
//generate num between 1 and 10
//alert player that a number has been chosen, click okay to place bet.
//bets money to guess num that's randomly chosen by the game
//game asks player to place bet between $5 and $10, then guess = number between 1 and 10
//if player guess = num chosen by the game
//bankroll increases by bet amount
//elsif player guess one more or less than the num chosen by comp, 
//bankroll doesn't increase or decrease at all.
//else bankroll -= bet amount
//player loses when their bankroll reaches 0

var playGuessingGame = function() {
  alert("Would you like to play?","OK");
  var bankroll = 100;
  while (bankroll > 0) {
    var num = Math.floor((Math.random() * 10) + 1);
    num;
    console.log(num);
    alert("I've chosen a number between 1 and 10. Press ok to place your bet.");
    var bet = prompt("Place a bet between 5 and 10, or enter q to quit");
      if (bet === "q") {
        break;
      }
    bet = parseInt(bet);
    var guess = prompt("Take a guess! Pick a number from 1 to 10");
    guess = parseInt(guess);
    if (guess === num) {
      bankroll += bet * 2;
      alert("Correct! You have " + bankroll + " dollars.");
    } else if (guess === num + 1) {
      alert("Incorrect, but you were close. You have " + bankroll + " dollars.");
    } else if (guess === num - 1) {
      alert("Incorrect, but you were close. You have " + bankroll + " dollars.");
    } else { 
      bankroll -= bet;
      alert("Incorrect. You now have " + bankroll + " dollars.");
    }
  } 
};

playGuessingGame();





