// Globales
let remainingMatches = 50;
// DOM
const body = document.querySelector('body');
const button_container = document.getElementById('bouton-container');
const matches = document.getElementById('matches');
const buttons = document.getElementById('buttons')
const firstButton = document.createElement('button');
const secondButton = document.createElement('button');

// Styles
body.style.backgroundColor = 'black';
buttons.appendChild(firstButton);
firstButton.innerText = "REMOVE";
firstButton.style.color = 'red';
firstButton.style.fontSize = '50px'
buttons.appendChild(secondButton);
secondButton.innerText = "REPLAY";
secondButton.style.color = 'red';
secondButton.style.fontSize = '50px';
secondButton.style.display = 'none';
matches.innerText = remainingMatches;
matches.style.color = 'red';
matches.style.fontSize = '100px';



// evenement pour retirer les allumettes.
firstButton.addEventListener('click', () => {
    gamePlay();
})

/*const gamePlay = () => {
    const answer = prompt("¿ How many ?");
    const userChoice = answer;
    if (userChoice > 0 ||  )
    /*removeMatches(userChoice, answer);
    console.log(userChoice);
}

const removeMatches = (a, b) => {
    return a - b
}*/

