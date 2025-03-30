import figlet from 'figlet';
import chalk from 'chalk';
import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

const ask = (question) => {
    return new Promise(resolve => {
		rl.question(chalk.yellow(question), resolve);
    });
};

const didIWin = (usersNumber, numberToGuess) => {
	if (usersNumber == numberToGuess) {
		return true;
    } else if (usersNumber < numberToGuess) {
		console.log(chalk.red(figlet.textSync('HIGHER')));
        return false;
    } else if (usersNumber > numberToGuess) {
        console.log(chalk.red(figlet.textSync('LOWER')));
    } else {
        console.log(chalk.red('Entry must be an number please try again'));
        return false;
    }
};

const askNumber = async (numToGuess) => {
	const userNumber = await ask("Please type the number you think it is\n");
    //console.log(numToGuess, userNumber)
    if(!didIWin(userNumber, numToGuess)) {
		await askNumber(numToGuess);
    };
};

const userVsUser = () => {
    
};

const userVsMachine = async () => {
    console.clear();
    const numberToGuess = Math.floor(Math.random() * 50);
    console.log(chalk.blue(figlet.textSync("1 player")));

    if (!await askNumber(numberToGuess)) {
        console.log(chalk.green("Congratulations you guessed the number !\ndo you want to replay ?"))
    } 
};

const main = async () => {
	console.clear();
    console.log(chalk.blue(figlet.textSync('GUESS')));
    console.log(chalk.cyan("the game is about to guess a number\n"))
	const userChoice = await ask("1: 1 player\n2: 2 players\nChoices [1 - 2 or exit]\n");
    
    switch (userChoice) {
        case '1':
            await userVsMachine();
            break;
        case '2':
			await userVsUser();
            break;
        case 'exit':
            break;
    }
    
	
    rl.close();
}

main();
