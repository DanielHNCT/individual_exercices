//let firstName = "Beyonce"
let askName = prompt("nom ?");
let name = askName;
console.log(name);
let hour = 18;
const sayHello = (/*firstNamename*/name, hour) => {
    let message1 = `Bonjour ${name} !`;
    let message2 = `Bonsoir ${name} !`;
    if(hour >= 18){
        document.querySelector('h1').innerText = message2;
        console.log(`Bonsoir ${name} !`)
             
    }else{
        document.querySelector('h1').innerText = message1;
        console.log(`Bonjour ${name} !`)
        
    }       
};
sayHello(name, hour);
/*
sayHello(`Beyonce`, 11)
sayHello(`Beyonce`, 18)
sayHello(`Beyonce`, 17);
*/

