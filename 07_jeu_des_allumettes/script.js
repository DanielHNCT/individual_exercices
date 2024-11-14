// GLOBALES
let remainingMatches = 50;

// DOM
const body = document.querySelector('body');
const first_heading = document.querySelector('h1');
const second_heading = document.querySelector('h2');
const button_container = document.getElementById('bouton-container');
const buttons = document.getElementById('buttons');
const firstButton = document.createElement('button');
const secondButton = document.createElement('button');
const matches = document.getElementById('matches');

// STYLES
body.style.backgroundColor = 'black';
first_heading.style.color = 'red';
first_heading.style.textAlign = 'center';
first_heading.innerText = "¡MATCHES TO REMOVE?!";
firstButton.innerText = "REMOVE MATCHES";
firstButton.style.fontSize = '50px';
firstButton.style.backgroundColor = 'red';
second_heading.innerHTML = "YOU HAVE 50 MATCHES<br>AND YOU MUST CHOOSE TO REMOVE<br>BETWEEN 1 AND 6 MATCHES <br> click below";
second_heading.style.color = 'red';
secondButton.innerText = "REPLAY";
secondButton.style.fontSize = '50px';
secondButton.style.backgroundColor = 'red';
secondButton.style.display = 'none';
buttons.appendChild(firstButton);
buttons.appendChild(secondButton);
matches.innerText = remainingMatches;
matches.style.color = 'red';
matches.style.fontSize = '100px';


const gamePlay = () => {
    const ask = prompt("¿How many?");
    const userChoice = parseInt(ask);
    if (isNaN(userChoice) || userChoice < 1 || userChoice > 6) {
        alert("please choose a number between 1 and 6");
        return;
    }
    const result = removeMatches(remainingMatches, userChoice);
    remainingMatches = result;
    if (remainingMatches <= 0) {
        remainingMatches = 0;
        displayMatches(remainingMatches);
        firstButton.style.display = 'none';
        endGame();
    } else {
        displayMatches(result);
    }
};


firstButton.addEventListener('click', () => {
    gamePlay();
});


const removeMatches = (remainingMatches, matchesToRemove) => {
    return remainingMatches - matchesToRemove;
};


const displayMatches = (result) => {
    matches.innerText = result;
};


const endGame = () => {
    matches.innerText = "Fin de jeu";
    replayButton();
};


const replayButton = () => {
    secondButton.style.display = "block";
    secondButton.addEventListener('click', () => {
        location.reload(); 
    });
};
