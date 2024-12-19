import { words } from "./base.js";

const userEntry = document.getElementById('user-entry');
const WellPlacedLetters = document.getElementById('well-placed-letters');
const missingLetters = document.getElementById('missing-letters');
const lettersNotInWord = document.getElementById('letters-not-in-word')
const userWIn = document.getElementById('user-win');
const button = document.getElementById('btn');

const tryWord = (word, base) => {
	// TODO: fix jeu sensible à la casse.
	if (word === base) {
		return true
  } else {
  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');

    for (let i = 0; i < arrayBase.length; i++) {
        arrayBase[i] === arrayWord[i]
            ? wellPlaced.push(arrayWord[i])
            : missplaced.push(arrayWord[i]);
    }
    for (const char of arrayWord) {
    	if (arrayBase.includes(char) === false) {
      	notInWord.push(char)
      }
    }

    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
}
//tryWord('salut', 'salut');

const randomizeWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    console.log(words[randomIndex].toLocaleLowerCase());
    return words[randomIndex];
}
let base = randomizeWord().toLowerCase();

const guess = () => {
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  if (result) {
    WellPlacedLetters.innerText = `Bien placé: ${word}`
  }
  //userEntry = word;
  console.log(result)
  document.getElementById("word").value = '';
  WellPlacedLetters.innerText = `Bien placé: ${result.wellPlaced.join(', ')}`
  missingLetters.innerText = `Mal placé: ${result.missplaced.join(', ')}`
  lettersNotInWord.innerText = `Pas dans le mot: ${result.notInWord.join(', ')}`
  result.wellPlaced.length === base.length ? userWIn.innerText = 'Vous avez gagné' : null
}

button.addEventListener('click', () => {
    guess();
})