import { dossierPrincipal, sentences } from "./module.js";

// Étape 1:
const afficherDossier = (obj) => {
    console.log(`🗂️ ${obj.nom}`);
};
//afficherDossier(dossierPrincipal);

// Étape 2:
/** RESULTATS
    🗂️ Ada
    🗂️ Projets collectifs 
    📑 CV.pdf
    🗂️ Projets persos
 */

// TEST ETAPE 2:
// console.log(dossierPrincipal.nom)
// console.log(dossierPrincipal.contenu[0].nom)
// console.log(dossierPrincipal.contenu[1].nom)
// console.log(dossierPrincipal.contenu[2].nom)
const afficherDossierIteratif = (obj) => {
    console.log('Iteratif:');
    for (let dossier in obj) {
        console.log(obj[dossier].nom);
    }
};
//afficherDossierIteratif(dossierPrincipal.contenu);

const afficherDossierRecursive = (obj, i) => {
    if (i == 3) {
        return false;
    }
    console.log(obj.contenu[i]);
    afficherDossierRecursive(obj, i + 1);
}
afficherDossierRecursive(dossierPrincipal, 0)


// ETAPE 3:
// const afficherDossierRecursive3 = (obj, i) => {
//     if (i == 3) {
//         return false;
//     }
//     console.log(obj.contenu[i]);
//     afficherDossierRecursive(obj, i + 1);
// }
// afficherDossierRecursive(dossierPrincipal, 0)


// const bomb = (n) => {
//     if (n == 0)
//     bomb(n - 1)
// }
// bomb(10);
// ETAPE 3