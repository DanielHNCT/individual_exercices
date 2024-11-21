let firstPlayersNumberToGuess
let secondPlayersEntry;


const title = document.querySelector('h1');
const button_container = document.getElementById('button-container');
const firstButton = document.createElement('button');
const secondButton = document.createElement('button');


button_container.appendChild(firstButton);
firstButton.innerText = "PLAY";
button_container.appendChild(secondButton);
secondButton.innerText = "replay";
secondButton.style.display = "none"


const gameplay = () => {

    firstPlayersNumberToGuess = parseInt(prompt("Joueur 1, veuillez choisir un nombre"));
    if (isNaN(firstPlayersNumberToGuess)) {
        alert("Vous devez entrer un nombre valdie !");
        return gameplay();
    }

    do {
        secondPlayersEntry = parseInt(prompt("Joueur 2, veuillez choisir un nombre"));
        if (isNaN(secondPlayersEntry)) {
            alert("Ce n'est pas un nombre, essayez encore !");
            continue;
        }
    } while (!didIwin(firstPlayersNumberToGuess, secondPlayersEntry));

    endGame();

};

const didIwin = (playersNumberToguess, numberToGuess) => {

    if (numberToGuess == playersNumberToguess) {
        alert("Bravo ! Vous avez deviné le nombre !");
        return true;
    }     
    else if (numberToGuess < playersNumberToguess) {
        alert("Plus grand !");
    } else if (numberToGuess > playersNumberToguess) {
        alert("Plus petit !");
    }
    return false;

};

const endGame = () => {

    firstButton.style.display = 'none';
    title.innerText = '';
    title.innerText = "FIN DE JEU";
    secondButton.style.display = 'block';

};

secondButton.addEventListener('click', () => {

    title.innerText = '¡ WELCOME !';
    secondButton.style.display = "none";
    gameplay();

});

firstButton.addEventListener('click', () => {

    gameplay();

});