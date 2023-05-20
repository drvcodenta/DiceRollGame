'use strict';

// Without any Javascript code, our page start having some random unwanted numbers in the score and the image of 
// dice ! That we need to remove;

const score0EL = document.getElementById('score--0'); // score0EL denotes score0 element
const score1EL = document.querySelector('#score--1'); // Showing you two different methods to select IDs
const diceEL = document.querySelector('.dice'); 
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.querySelector('#current--0');
let activePlayer = 0;
let currentPlayerScore = document.querySelector(`#current--${activePlayer}`);
let currentPlayerTotalScore = document.querySelector(`#score--${activePlayer}`);
let CurrentPlayerCurrentScore = 0;
let currentScore = [0,0];
let playing = true;
score0EL.textContent = '0';
score1EL.textContent = '0';
diceEL.classList.add('hidden');
// console.log(typeof score0EL.textContent); //Looks like it is working correctly

//From above code, we succesfully removed the dice element and set the scores of each player to zero!

//Now User Rolls the dice and it does following steps:
// 1. Generate random dice roll
// 2. Display Dice roll
// 3. Check if it is a 1 and switch to another player if not, otherwise add it to the currentScore!

const switchPlayer = function(){
    activePlayer = activePlayer === 0 ? 1 : 0;
        // console.log(activePlayer);
        currentPlayerScore = document.querySelector(`#current--${activePlayer}`);
        // console.log(activePlayer);
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        CurrentPlayerCurrentScore = 0;
}

btnRoll.addEventListener('click', function(){
    if (playing){
        let diceNum = Math.trunc(Math.random()*6) + 1;
        console.log(diceNum);
        //Step 1 done
        diceEL.src = `dice-${diceNum}.png`;
        console.log(diceEL.src);
        diceEL.classList.remove('hidden');
        //Step 2 done
        if (diceNum == '1'){
            currentPlayerScore.textContent = 0;
            switchPlayer();
        } else {
    
            CurrentPlayerCurrentScore += diceNum;
            currentPlayerScore.textContent = CurrentPlayerCurrentScore;
        }
    }
    
})

btnHold.addEventListener('click', function () {
    if (playing){
    
    currentScore[activePlayer] += CurrentPlayerCurrentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = currentScore[activePlayer];
    if (currentScore[activePlayer] >= 100){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEL.classList.add('hidden');
        playing = false;
    }
    else {
        switchPlayer();
    }       
}
  })

btnNew.addEventListener('click', function () { 
    // console.log('New Game button was clicked?');
    
    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    // activePlayer = 0;
    // currentScore = [0,0];
    // CurrentPlayerCurrentScore = 0;
    // playing = true;
    // document.querySelector(`.player--0`).classList.add('player--active');
    // document.querySelector(`.player--1`).classList.remove('player--active');
    // document.querySelector(`#score--0`).textContent = 0;
    // document.querySelector(`#score--1`).textContent = 0;
    // document.querySelector(`#current--0`).textContent = 0;
    // document.querySelector(`#current--1`).textContent = 0;
 })
