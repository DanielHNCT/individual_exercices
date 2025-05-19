import { Controller } from './ControllerTest.js';
import terminalImage from 'terminal-image';
import { Model } from './ModelTest.js';
import { View } from './ViewTest.js';
import readline from 'readline';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { user } from 'pg/lib/defaults.js';

const model = new Model();
const controller = new Controller();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const ask = (question: string) => {
//     return new Promise(resolve => {
//         rl.question(question, resolve);
//     });
// };

const displayImage = async (url) => {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const image = await terminalImage.buffer(Buffer.from(buffer), {
        width: '50%'
    });
    
    return image
};

const loadPokemons = async () => {
    const data = await model.getAllPokemons();
    
    let pokemonArr = [];

    let i = 0;
    do {
        pokemonArr.push(data.pokemon[i].name);
        i++
    } while (i < data.pokemon.length)

    return pokemonArr;
}

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];
// const result = inventory.find(({ name }) => name === "cherries");
// console.log(result); // { name: 'cherries', quantity: 5 }


const main = async () => {
    console.clear();
    View.displayIntro();
    
    const pokemonNames = await loadPokemons();
    const allPokemons = await model.getAllPokemons();
    console.log(pokemonNames.length);
    console.log(allPokemons);
    
    const pokemonChoosed = await inquirer.prompt([
        {
            type: 'list',
            name: 'pokemon',
            message: chalk.yellow('Please select a pokemon'),
            choices: pokemonNames
        }
    ]);

    // console.log(pokemonChoosed.pokemon);
    // const userQuery = 'Voltorb';
    // const test = allPokemons.find(({ name }) => name === userQuery);
    // console.log(test);
    
    
    
    rl.close();
};

main();