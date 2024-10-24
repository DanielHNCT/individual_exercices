alert("¡WELCOME!")
const askNumber = prompt("¿ which number ?");
let givenNumber = askNumber;
console.log(askNumber);



const didIWin = (givenNumber) => {
    if(givenNumber == 22){
        alert("Bravo ! Vous avez trouvé le nombre")
        console.log("Bravo ! Vous avez trouvé le nombre")
        return true
    }else if (givenNumber < 22){
        alert("Plus grand")
        console.log("Plus grand")
        return false     
    }else if (givenNumber > 22){
        alert("Plus petit")
        console.log("Plus petit")
        return false
    }else{
        alert("ceci n'est pas reconnu")
        console.log("ceci n'est pas reconnu")
        return false
    }
}
console.log(didIWin(givenNumber));

function gamePlay () {
    didIWin(givenNumber);
}
