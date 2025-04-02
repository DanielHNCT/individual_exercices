import readline from 'readline';
import inquirer from 'inquirer';
import { Model } from './Model.js';
const model = new Model();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const ask = (question) => {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
};
const getUserQuery = async (test) => {
    let choice;
    if (test.tables === 'Categories') {
        choice = await model.getAllCategories();
    }
    else if (test.tables === 'Favoris') {
        choice = await model.getFavorite();
    }
    else if (test.tables === 'Recettes restriction') {
        choice = await model.getRecipeRestriction();
    }
    else if (test.tables === 'Recettes') {
        choice = await model.getAllRecipe();
    }
    else if (test.tables === 'Restrictions alimentaire') {
        choice = await model.getDietaryRestriction();
    }
    else if (test.tables === 'User') {
        choice = await model.getUsers;
    }
    return choice;
};
const main = async () => {
    const listTable = await inquirer.prompt([
        {
            type: 'list',
            name: 'tables',
            message: 'Select a table',
            choices: ['Categories', 'Favoris', 'Recettes restriction', 'Recettes', 'Restrictions alimentaire', 'User']
        }
    ]);
    const choice = await getUserQuery(listTable);
    // let choice: void;
    // if (listTable.tables === 'Categories') {
    //     choice = await model.getAllCategories();
    // } else if (listTable.tables === 'Favoris') {
    //     choice = await model.getFavorite();
    // } else if (listTable.tables === 'Recettes restriction') {
    //     choice = await model.getRecipeRestriction();
    // }else if (listTable.tables === 'Recettes') {
    //     choice = await model.getAllRecipe();
    // }else if (listTable.tables === 'Restrictions alimentaire') {
    //     choice = await model.getDietaryRestriction();
    // }else if (listTable.tables === 'User') {
    //     choice = await model.getUsers;
    // }
    // const test = await inquirer.prompt([
    //     {
    //         type: 'input',
    //         name: 'Query',
    //         message: 'Want to search something ?'
    //     }
    // ]);
    console.log(choice);
    await main();
    rl.close();
};
main();
