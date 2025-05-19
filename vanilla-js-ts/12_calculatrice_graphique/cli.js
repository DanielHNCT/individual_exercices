import readline from 'readline';
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import boxen from 'boxen';



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (question) => {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
};

const opening = async () => {
    console.clear();
    console.log(boxen(chalk.blue(figlet.textSync('Calculator CLI!')),{padding: 1, margin: 1, borderStyle: 'double'}));
    console.log(chalk.cyan('Welcome to this calculator made in command line interface (too lazy for a graphial one)'));

    try {
        const choices = await inquirer.prompt([
            {
                type: 'list',
                name: 'menu-choice',
                message: 'Select an option :',
                choices: ['Calculator', 'Area Calculator']
            }
        ])
    } catch (error) {
        console.error(`ERREUR FATALE ${error}`);
    } 
    
}


const main = () => {
    opening();
    rl.close();
}
main();


// import inquirer from "inquirer";
// const preguntarDatos = async () => {
//     try {
//         const respuestas = await inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'nombre',
//                 message: '¿Cuál es tu nombre?'
//             },
//             {
//                 type: 'list',
//                 name: 'lenguaje',
//                 message: '¿Cuál es tu lenguaje favorito?',
//                 choices: ['JavaScript', 'Python', 'Java', 'PHP']
//             },
//             {
//                 type: 'confirm',
//                 name: 'estudiando',
//                 message: '¿Estás estudiando programación actualmente?'
//             }
//         ]);

//         console.log('\nTus respuestas:');
//         console.log(`Nombre: ${respuestas.nombre}`);
//         console.log(`Lenguaje favorito: ${respuestas.lenguaje}`);
//         console.log(`Estudiando: ${respuestas.estudiando ? 'Sí' : 'No'}`);

//     } catch (error) {
//         console.error('Hubo un error:', error);
//     }
// }

// // Ejecutamos la función
// preguntarDatos();


