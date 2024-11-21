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

    firstPlayersNumberToGuess = parseInt(prompt("Player 1 : choose a numb er"));
    if (isNaN(firstPlayersNumberToGuess)) {
        alert("Vous devez entrer un nombre valdie !");
        return gameplay();
    }

    do {
        secondPlayersEntry = parseInt(prompt("choose a number"));
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




/*
firstButton.addEventListener('click', () => {

    gameplay();

})
secondButton.addEventListener('click', () => {

    title.innerText = '¡ WELCOME !'
    secondButton.style.display = "none"
    gameplay();

});

const gameplay = () => {

    const ask = prompt("choose a number");
    const userChoice = ask;
    if (didIwin(userChoice) === true) {
        endGame();
    } else {
        return        
    }

};


const didIwin = (numberToGuess) => {

    if (numberToGuess === null) {
        return false;
    }

    if (numberToGuess == 22) {
        alert("Bravo ! Vous avez deviné le nombre");
        endGame();
        return true;
    } else if (numberToGuess < 22) {
        alert("Plus grand");
        gameplay();
        return false;
    } else if (numberToGuess > 22) {
        alert("Plus petit");
        gameplay();
        return false;
    } else {
        alert("ceci n'est pas reconnu");
        return false;
    }

};


const endGame = () => {

    firstButton.style.display = 'none';
    title.innerText = '';
    title.innerText = "FIN DE JEU";
    secondButton.style.display = 'block';

};


const askNumber = () => {
    const firstAsk = prompt("player 1 : choose a number between");
    const playerOne = firstAsk;


}
*/



















/*
button.addEventListener('click', () => {
    const ask = prompt("Choose a number ")
    givenNumber = ask;
    console.log(`user choose ${givenNumber}`);
    
    let didHeWin = didIwin(givenNumber);
    console.log(didHeWin);
    if (didHeWin === true) {
        return;
    } else {
        
    }
})

const askNumber = () => {
    const ask = prompt("Choose a number ")
    givenNumber = ask;
    console.log(`user choose ${givenNumber}`);
}

const didIwin = (numberToGuess) => {
    if (numberToGuess < 22) {
        alert("Plus grand");
        return false;
    }else if (numberToGuess > 22) {
        alert("Plus petit");
        return false;
    }else{
        alert("Bravo ! Vous avez deviné le nombre");
        return true;
    }
}


const gameplay = (userEntry) => {
    if (didIwin(userEntry) === true) {
        return;
    }else{
        askNumber();
    }
}
*/