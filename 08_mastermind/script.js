const btnContainer = document.getElementById('buttons-container');
const redBtn = document.getElementById('red-btn');
const purpleBtn = document.getElementById('purple-btn');
const blueBtn = document.getElementById('blue-btn');
const greenBtn = document.getElementById('green-btn');
const userChoiceContainer = document.getElementById('user-choice-container');

const codeMaker = ['blue', 'purple', 'red', 'green'];
let codeBreaker = [];
const userAttempt = 12;

btnContainer.addEventListener('click', (event) => {
    
    const buttonType = event.target.dataset.type;
    console.log(buttonType)
    if (buttonType === 'red') {
        codeBreaker.splice(0, 0, 'red')
        console.log(codeBreaker)
    }
})