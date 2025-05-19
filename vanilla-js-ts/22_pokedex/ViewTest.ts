import terminalImage from 'terminal-image';
import figlet from 'figlet';
import chalk from 'chalk';

export class View {
    constructor(imageUrl: string) {}
    static displayIntro() {
        console.log(chalk.blue(figlet.textSync('POKEDEX !')));
        console.log(chalk.cyan('Welcome ! this is a command line interface made for fun !'));
    }
    
    static async showPokemonImage() {
        const response = await fetch(imagge)
    }
}