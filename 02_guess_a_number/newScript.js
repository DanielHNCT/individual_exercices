let givenNumber;

const title = document.querySelector('h1');
const button_container = document.getElementById('button-container');
const button = document.createElement('button');
button_container.appendChild(button);
button.innerText = "PLAY"


button.addEventListener('click', () => {
    const ask = prompt("Choose a number ")
    givenNumber = ask;
    console.log(`user choose ${givenNumber}`);
    didIwin(givenNumber);
    if (didIwin(givenNumber) === true) {
        return;
    } else {

    }
})

/*const askNumber = () => {
    const ask = prompt("Choose a number ")
    givenNumber = ask;
    console.log(`user choose ${givenNumber}`);
}*/

const didIwin = (numberToGuess) => {
    if (numberToGuess < 22) {
        alert("Plus grand");
        return false
    }else if (numberToGuess > 22) {
        alert("Plus petit");
        return false
    }else{
        alert("Bravo ! Vous avez deviné le nombre");
        return true
    }
}


const gameplay = (userEntry) => {
    if (didIwin(userEntry) === true) {
        return
    }else{
        askNumber();
    }
}