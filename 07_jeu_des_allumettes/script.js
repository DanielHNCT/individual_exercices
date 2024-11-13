const matches = 50

// Selection de notre titre
const firstHeading = document.querySelector('h1');
firstHeading.style.color = 'red';
firstHeading.style.textAlign = 'center'
firstHeading.innerText = "¡MATCHES TO REMOVE!"

// selection de no conteneur de bouton
const buttonContainer = document.querySelector('.button-container');
const newButton = document.createElement('button');
newButton.textContent = "Choose how many you matches you want to remove"
buttonContainer.appendChild(newButton);




/*const askNumbersToRemove = prompt("How many matches you want to remove ? ")
const removeMatches = (nombresAEnlever) => {
    return nombresAllumettes - userChoice
}

removeMatches();*/