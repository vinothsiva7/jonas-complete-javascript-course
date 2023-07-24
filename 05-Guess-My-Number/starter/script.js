'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
const btnReset = document.querySelector('.again');
let score = 20;

function displayMessage(selector,message) {
    document.querySelector(`${selector}`).textContent = `${message}`;
}

function bgColor(hexCode) {
    document.querySelector('body').style.backgroundColor = `${hexCode}`;
}

function gameLogic() {
    const guess = Number(document.querySelector('.guess').value);
    if (score > 1) {
        if (!guess) {
            displayMessage('.message','No Input');
            displayMessage('.score',score);
        } else if (guess === secretNumber) {
            document.querySelector('.number').textContent = secretNumber;
            displayMessage('.message','You WON the game');
            displayMessage('.score',score);
            bgColor('#60b347');
            document.querySelector('.number').style.width = '30rem';
            let currentScore = Number(document.querySelector('.score').textContent);
            let scoreHigh = Number(document.querySelector('.highscore').textContent);
            document.querySelector('.check').setAttribute("disabled", "");
            document.querySelector('input').setAttribute("disabled", "");
            if (currentScore > scoreHigh) {
            document.querySelector('.highscore').textContent = document.querySelector('.score').textContent
            };
        } else {
            score--;
            displayMessage('.score',score);
            displayMessage('.message',guess>secretNumber ? 'Too high':'Too Low');
        }
    } else if (score<=1){
        displayMessage('.message','Oops you LOST the game');
        displayMessage('.score',0);
        bgColor('#ff6464');
    }
}

function reset() {
            displayMessage('.message','Start guessing...');
            score = 20;
            displayMessage('.score',score);
            bgColor('#222222');
            document.querySelector('.number').style.width = '15rem';
            document.querySelector('.number').textContent = '?';
            document.querySelector('.guess').value = '';
            document.querySelector('.check').removeAttribute("disabled");
            document.querySelector('input').removeAttribute("disabled");
            secretNumber = Math.trunc(Math.random()*20)+1;
            
}

document.querySelector('.check').addEventListener('click',gameLogic);
btnReset.addEventListener('click',reset);
