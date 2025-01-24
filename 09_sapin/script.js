    // console.log("    +"); // 4 derecha
    // console.log("   /|\\ "); // 3 dercha
    // console.log("  /*|*\\ "); // 2 derecha
    // console.log(" /**|**\\ "); // 1 derecha
    // console.log("/***|***\\ "); // 0 derehca 
// const afficherPointeSapin =  (height) => {
//     do {
//         console.log()
//     } while (height.length)
// }
//afficherPointeSapin(4)
// const stringSpace = '     ';
// const mot1 = 'Bonjour';
// const mot2 = 'reactor';
// console.log(mot1,mot2);
// const phrase = mot1 + mot2;
// console.log(phrase);
// const phrase2 = `${mot1}${stringSpace + stringSpace}${mot2}`;
// console.log(phrase2);
// const phrase2 = `${stringSpace}${mot1}${mot2}`;
// console.log(phrase2)

// const test = (stringSpace) => {
//     const newPhrase = phrase2.split('');
//     console.log(newPhrase)
//     newPhrase.splice(1, 1);
//     const three = newPhrase.join('');
//     console.log(newPhrase)
//     console.log(three)
// }
// test();
//const splitF = (text) => text.split('');

const TEXT_TEST =  '    salut !';
const TEXT_TEST2 =  'salut !';
const espace = ' ';
console.log(espace.repeat(20) ,TEXT_TEST2)

const test2 = () => {
    for (let i = 0; i < 5; i++ ) {
        console.log(`${espace.repeat(i)}${TEXT_TEST2}`)
    }
}

test2();



// const test = (text) => {
//     const arr = text.split('');
//     console.log(arr);
//     for (let i = 4; i > 0; i--) {
//         const three = arr.splice(1, 1);
//         console.log(three);
//     }
// };
// test(TEXT_TEST);


// const top = '+';
// const left = '/';
// const right = '\\';
// let star = '*';
// const base = '|';
// let rightTreePart = '';
// let leftTreePart = '';



// const afficherEtoiles = (n) => {
    
//     for (let i = 0; i < n; i++) {
//         line += star
//         //console.log(line)
//     }
//     return console.log(line);
// }

// const afficherRectangle = (height, width) => {
//     for (let i = 0; i < height; i++) {
//         afficherEtoiles(width)
//     }
// }
// //afficherRectangle(5, 5);

// const afficherTriangleDroite = (n) => {
//     console.log('\\')
//     for (let i = 0; i < n; i++) {
//         rightTreePart += star;
//         console.log(rightTreePart + '\\');
//     }
//     //return console.log(line);
// }
// afficherTriangleDroite(4);


// const afficherTriangleGauche = (n) => {
//     console.log('     /');
//     for (let i = 0; i < n; i++) {
//         leftTreePart += star
//         console.log(left + leftTreePart);
//     }
// }
// afficherTriangleGauche(4);