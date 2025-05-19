import readline from 'readline';
import chalk from 'chalk';
import ora from 'ora';
import figlet from 'figlet';
import { resolveObjectURL } from 'buffer';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (question) => {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
};

const main = () => {
    
}