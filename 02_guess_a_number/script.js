alert("¡WELCOME!");

/*const ask = prompt("¡ choose a number between 0 and 50 !");
ask = a
console.log(a);*/

const didIWin = (numberToGuess, givenNumber) => { 
    if (givenNumber == numberToGuess){
        alert("Bravo ! Vous avez trouvé le nombre")
        console.log("user found the number")
        return true
    }else if (givenNumber < numberToGuess){
        alert("Plus grand")
        console.log(`user's number : ${givenNumber}`)
        return false     
    }else if (givenNumber > numberToGuess){
        alert("Plus petit")
        console.log(`user's number : ${givenNumber}`)
        return false
    }else{
        alert("ceci n'est pas reconnu")
        console.log("unknow user's entry")
        return false
    }
}


const playerNumber = () => {
    
}

const gamePlay = () => { 
    let result = false;
    while (!result) {
        const askNumber = prompt("¿Which number?");
        let givenNumber = parseInt(askNumber, 10);
        result = didIWin(givenNumber);
    }
}
//playerNumber();
//gamePlay();
