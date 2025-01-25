console.log("    +"); // 4 derecha
console.log("   /|\\ "); // 3 dercha
console.log("  /*|*\\ "); // 2 derecha
console.log(" /**|**\\ "); // 1 derecha
console.log("/***|***\\ "); // 0 derehca 
// const afficherPointeSapin =  (height) => {}
// afficherPointeSapin()

const afficherEtoiles = (n) => {
    for (let i = 0; i < n; i++) {
        line += star
        //console.log(line)
    }
    return console.log(line);
}

const afficherRectangle = (height, width) => {
    for (let i = 0; i < height; i++) {
        afficherEtoiles(width)
    }
}

const top = '+';
const left = '/';
const right = '\\';
let star = '*';
const base = '|';
let rightTreeLine = '';
let leftTreeLine = '';
const espacement = '    ';


const afficherTriangleDroite = (n) => {
    console.log('\\')
    for (let i = 0; i < n; i++) {
        rightTreeLine += star;
        console.log(rightTreeLine + right);
    }
    //return console.log(line);
}
afficherTriangleDroite(4);

const afficherTriangleGauche = (n) => {
    let arrSpace = espacement.split('');
    let newBuild;
    //console.log(arrSpace);
    console.log('    /');
    for (let i = 0; i < n; i++) {
        let line = leftTreeLine += star
        let build = left + line 
        //console.log(build)
        let arrStar = build.split(' ');
        //console.log(arrStar)
        arrSpace.splice(0, 1);
        newBuild = arrSpace.concat(arrStar);
        //console.log(newBuild)
        console.log(newBuild.join(''))
    }
}
afficherTriangleGauche(4);


