// GLOBALES
let matches = 50
const remaining_matches = document.getElementById('remaining-matches');
const first_heading = document.querySelector('h1');
const second_heading = document.querySelector('h2');
const button = document.querySelector('button');
const body = document.querySelector('body');

body.style.backgroundColor = 'black'
remaining_matches.innerText = matches
remaining_matches.style.color = 'red'
remaining_matches.style.fontSize = '70px'

first_heading.style.color = 'red';
first_heading.style.textAlign = 'center'
first_heading.innerText = "¡MATCHES TO REMOVE?!"

second_heading.innerHTML = "YOU HAVE 50 MATCHES<br>AND YOU MUST CHOOSE TO REMOVE<br>BETWEEN 1 AND 6 MATCHES <br> click below"
second_heading.style.color = 'red'

button.innerText = "remove matches"
button.style.color = 'red'
button.style.backgroundColor = 'black'
button.style.fontSize = '30px'


button.addEventListener('click', () => {
    const ask = prompt('¿ HOW MANY ?');
    userChoice = ask;
    const result = removeMatches(matches, userChoice);
    matches = result;
    remaining_matches.innerText = matches
    //console.log(result);
    //displayMatches(result)  
});

const removeMatches = (remainingMatches, matchesToRemove) => {
    result = remainingMatches - matchesToRemove
    return result
} 

const displayMatches = () => {
    result.innerText = remaining_matches;
}

/*
const checkMatches = () => {

}


const continueOrEndgame = () => {

}
*/


/*
Creation du bouton avec al methode appendChild. 
const buttonContainer = document.querySelector('.button-container');
const newButton = document.createElement('button');
newButton.textContent = "Choose how many you matches you want to remove"
buttonContainer.appendChild(newButton);
newButton.addEventListener('click', () => {
    const calc = prompt('remember you have 50 matches choose between 1 and 6');
    const userChoice = calc

    console.log(userChoice);
})
*/ 
