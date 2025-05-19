import { Model } from './ModelTest.js';
import terminalImage from 'terminal-image';
import readline from 'readline';

const model = new Model();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const displayImage = async (url) => {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const image = await terminalImage.buffer(Buffer.from(buffer), {
        width: '50%'
    });

    return image
};


const main = async () => {
    // const data = await model.getAllPokemons();
    // const infos = data.pokemon[0];
    const test = '001'
    console.log(await  displayImage(`http://www.serebii.net/pokemongo/pokemon/${test/*infos.num*/}.png`));
    // console.log(infos);

    rl.close();
};

main();

// const main = async () => {
//     const test = await displayImage('http://www.serebii.net/pokemongo/pokemon/100.png');
//     console.log(test);
//     const data = await fetchTest();
//     console.log(data.pokemon[0].id);
//     console.log(data.pokemon[0].num);
//     console.log(data.pokemon[0].name);
//     console.log(data.pokemon[0].type);
//     console.log(data.pokemon[0].height);
//     console.log(data.pokemon[0].weight);
//     console.log(data.pokemon[0].candy);
//     console.log(data.pokemon[0].candy_count);
//     console.log(data.pokemon[0].egg);
//     console.log(data.pokemon[0].spawn_chance);
//     console.log(data.pokemon[0].avg_spawns);
//     console.log(data.pokemon[0].spawn_time);
//     console.log(data.pokemon[0].multipliers);
//     console.log(data.pokemon[0].weaknesses);
//     console.log(data.pokemon[0].next_evolution);
    
// }
// main();





// import inquirer from 'inquirer';

// async function preguntarDatos() {
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

// preguntarDatos();

// import terminalImage from 'terminal-image';
// import { readFile } from 'fs/promises';

// const mostrarImagen = async () => {
//   // Puedes usar una imagen local
//   const buffer = await readFile('./ruta/a/tu/imagen.jpg');
  
//   console.log(await terminalImage.buffer(buffer, {
//     width: '50%',  // Puedes ajustar el tamaño
//     height: 'auto'
//   }));
// };

// mostrarImagen();