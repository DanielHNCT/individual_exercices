const btnCtn = document.getElementById('btns-ctn')
const input = document.querySelector('input')
const numbers = document.querySelectorAll('[data-number]');
// const operator = document.querySelectorAll('[data-operator]');
// const numbers = document.querySelectorAll('#numbers');
// console.log(numbers[0].value);
// console.log(operator);

const refs = [
    ...document.querySelectorAll(`[data-number]`)
];
refs.forEach(item => {
    console.log(item.textContent)
});
console.log(refs[0].textContent);

let firstUserEntry = '';
let secondUserEntry = '';

class Calculator {
    constructor (firstEntry, operator, secondEntry) {
        this.firstEntry = firstEntry
        this.operator = operator
        this.secondEntry = secondEntry
    }
    displayNumbers() {
        input.value += this.firstEntry;
    }
    eraseEntry() {
        const array = /*input.value*/numbers.split('');
        array.pop();
        const erasedNumber = array.join('');
        return erasedNumber;
    }
    calculate() {
        let result;
        let first = Number(this.firstEntry);
        let second = Number(this.secondEntry)
        Number(this.secondEntry);
        if (this.operator === '+') {
            result = this.firstEntry + this.secondEntry;
            console.log(first + second);
            return result;
            //return this.firstEntry + this.secondEntry
        } else if (this.operator === '-') {
            //result = this.firstEntry - this.secondEntry;
            console.log(first - second);
            return result;
            //return this.firstEntry - this.secondEntry
        } else if (this.operator === '*') {
            //result = this.firstEntry * this.secondEntry;
            console.log(first * second);
            //return result;
            //return this.firstEntry * this.secondEntry
        } else if (this.operator === '÷') {
            //result = this.firstEntry / this.secondEntry;
            console.log(first / second);
            //return result;
            //return this.firstEntry / this.secondEntry;
        } else if (this.operator === '%') {
            //result = this.firstEntry % this.secondEntry;
            console.log(first % second);
            //return result;
            //return this.firstEntry % this.secondEntry;
        }
    }
};

const firstEntry = '11';
const operator2 = '+';
const secondEntry = '2';
const test = new Calculator(firstEntry, operator2, secondEntry);
test.calculate();
// console.log(test);
// test.calculate();

// const eraseEntry = (numbers) => {
//     const array = /*input.value*/numbers.split('');
//     array.pop();
//     const erasedNumber = array.join('');
//     return erasedNumber;
// }

// const displayNumbers = (number) => {
//     input.value += number;
// };

// btnCtn.addEventListener('click', (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         if (Number(event.target.textContent)) {
//             displayNumbers(event.target.textContent)
//             //console.log(event.target.textContent)
//         } else if (!Number(event.target.textContent)) {
//             if (event.target.textContent === 'c') {
//                 console.log('hey')
//                 eraseEntry(input.value);
//             }
//             // console.log(event.target.textContent);
//             displayNumbers(event.target.textContent)
//         }
//     }
// });



// // btnCtn.addEventListener('click', (event) => {
// //     if (event.target.tagName === 'BUTTON') {
// //         if (Number(event.target.textContent)) {
// //             displayNumbers(event.target.textContent)
// //             console.log(event.target.textContent)
// //         } else if (!Number(event.target.textContent)) {
// //             console.log(event.target.textContent)
// //             displayNumbers(event.target.textContent)
// //         }
// //     }
// // });

// //Number(event.target.textContent)









const categoris = {
    fiction, documentaire
}





// // const btnCtn = document.getElementById('btns-ctn')
// // const displayInput = document.getElementById('display-input');
// // const input = document.querySelector('input')
// // let firstEntry = 0;

// // btnCtn.addEventListener('click', (event) => {
// //     if  (/*event.target.tagName === 'BUTTON' && */event.target.textContent === '*', '%', '+', '-', '÷', '=') {
// //         return;
// //     } else if (event.target.tagName === 'BUTTON') {
// //         firstEntry += event.target.textContent
// //         console.log(firstEntry)
// //         input.value = firstEntry
// //     }
// // });