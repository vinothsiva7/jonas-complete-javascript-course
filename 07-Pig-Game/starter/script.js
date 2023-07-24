'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const playerActive0 = document.querySelector(`.player--0`);
const playerActive1 = document.querySelector(`.player--1`);
let scores,currentScore,activePlayer,playing;

function init() {
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    diceElement.classList.add('hidden');
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    playerActive0.classList.remove('player--winner');
    playerActive1.classList.remove('player--winner');
    playerActive0.classList.add('player--active');
    playerActive1.classList.remove('player--active');
    playing=true;
}
init();

function switchPlayer() {
    currentScore=0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    activePlayer=activePlayer===0?1:0;
    playerActive0.classList.toggle('player--active');        playerActive1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random()*6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.setAttribute('src',`dice-${dice}.png`);
    if (playing) {
        if (dice!==1){
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click',function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer]>=100) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceElement.classList.add('hidden');
            playing = false;
        } else {
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', init);