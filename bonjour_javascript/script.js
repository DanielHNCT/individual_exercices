//const firstname = "Beyonce";
let askName = prompt("Nom ?")
let name = askName;
let hour = new Date().getHours()
//let hour = 21;
const sayHello = (name, hour) => {
    let message1 = `Bonsoir ${name} !`;
    let message2 = `Bonjour ${name} !`;
    
    if (hour >= 18) {
        console.log (`Bonsoir ${name}`);
        document.querySelector('h1').innerText = message1;
    } else {
        document.querySelector('h1').innerText = message2;
    }
}
sayHello(name, hour);
//sayHello(firstname);
//sayHello(`Beyonce`, 11);
//sayHello(`Beyonce`, 18);
//sayHello(`Beyonce`, 17);

