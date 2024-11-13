// GLOBALES
let matches = 50
const matches_remaining = document.getElementById('remaining-matches');
const display_matches = document.createElement('p');
const first_heading = document.querySelector('h1');
const second_heading = document.querySelector('h2');
const button = document.querySelector('button');

display_matches
first_heading.style.color = 'red';
first_heading.style.textAlign = 'center'
first_heading.innerText = "¡MATCHES TO REMOVE!"
second_heading.innerHTML = "YOU HAVE 50 MATCHES<br>AND YOU MUST CHOOSE TO REMOVE<br>BETWEEN 1 AND 6 MATCHES <br> click below"
second_heading.style.color = 'red'
button.innerText = "remove matches"
button.style.color = 'red'
button.style.backgroundColor = 'black'
button.style.fontSize = '30px'

button.addEventListener('click', () => {
    const ask = prompt('¿ HOW MANY ?');
    userChoice = ask;
    let result = removeMatches(matches, userChoice);
    console.log(result);
    displayMatches(display_matches)  
});

const removeMatches = (matchesRemaining, matchesToRemove) => {
    return matchesRemaining - matchesToRemove
} 

const displayMatches = (result) => {
    result.innerText = matches;
}

/*
const checkMatches = () => {

}


const continueOrEndgame = () => {

}*/












// selection du conteneur de bouton
/*const buttonContainer = document.querySelector('.button-container');
const newButton = document.createElement('button');
newButton.textContent = "Choose how many you matches you want to remove"
buttonContainer.appendChild(newButton);
newButton.addEventListener('click', () => {
    const calc = prompt('remember you have 50 matches choose between 1 and 6');
    const userChoice = calc

    console.log(userChoice);
})*/
