let matches = 50;
const button = document.querySelector('button');
const display_matches = document.getElementById('remaining-matches');

button.innerText = 'REMOVE MATCHES';
display_matches.innerText = matches;



button.addEventListener('click', () => {
    gamePlay();
    const ask = prompt("combien ?");
    userChoice = ask;
    const result = removeMatches(matches, userChoice)
    matches = result;
    displayMatches(result);

    //console.log(removeMatches(matches,userChoice));
})

const gamePlay = () => {
    const ask = prompt("¿ combien ?");
    userChoice = ask;
    const result = removeMatches(matches, userChoice)
    matches = result;
    if (result === 0) {
        endGame();
    }else {
        displayMatches(result);

    }
    
}

// Fonction qui va retirer les allumettes.
const removeMatches = (remainingMatches, matchesToRemove) => {
    result = remainingMatches - matchesToRemove
    return result
}

// Fonction qui va afficher les allumettes restantes.
const displayMatches = () => {
    display_matches.innerText = matches
}

// Fonction de fin de jeu.
const endGame = () => {
    display_matches.innerText = ""
    display_matches.innerText = "fin de jeu"
    replayButton()
}

// Fonctions qui va faire recommancer le jeu
const replayButton = () => {
    button.innerText = ""
    button.innerText = "replay"
    button.addEventListener('click', () => {
        matches = 50;
        gamePlay();
    })
}