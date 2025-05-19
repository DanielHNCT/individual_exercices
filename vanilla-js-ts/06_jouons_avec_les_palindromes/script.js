// const isValidDate = (date) => {
//     const obj = console.log(new Date(date));
//     console.log(isNaN(obj));
    
// };

// isValidDate('03/04/2001');
// isValidDate('');
const oldDate = new Date('2023-02-29');
console.log('Ancienne méthode:');
console.log(oldDate); // 


isValidDate(dateTest);
import { leapYear, nonLeapYear } from "./array.js";
const filterSlash = (entry) => entry.split('/');
const leapYearVerification = (year) => {
    if (Number.isInteger(year / 400)) {
        console.log(`L'année ${year} est bissextile.`);
        return true;
    } else if (Number.isInteger(year / 100)) {
        console.log(`L'année ${year} n'est pas bissextile.`);
        return false;
    } else if (Number.isInteger(year / 4)) {
        console.log(`L'année ${year} est bissextile.`);
        return true;
    } else {
        console.log(`L'année ${year} n'est pas bissextile.`);
        return false;
    }
};
const maxDaysInMonth = (month, year) => {
    console.log(month);
    // comonthWith31Days = [1, 3, 5, 7, 8, 10, 12];
    // const leapnst monthwith30Days = [4, 6, 9, 11];
    // const Year = [{id: 2, days: 29},{id: 2,days: 28}] 
    if (month < 1 || month > 12) {
        console.log(`${month} n'est pas un mois valide`)
        return false;
    }
    if (leapYearVerification(year)) {
        if (month === leapYear[1].id) {
            
        }
    }

}
const isValidDate = (dateString) => {
    const array = filterSlash(dateString);
    if (array.length !== 3) {
        console.log('Date non valide !')
        return false;
    }
    const date = array.map(item => Number(item));
    const day = date[0];
    const month = date[1];
    const year = date[2];
    maxDaysInMonth(month, year);
    console.log(date);
}
isValidDate('10/12/2020');











// /*
// const maxDaysInMonth = (firstEntry, secondEntry) => {
//     const monthWith31Days = [1, 3, 5, 7, 8, 10, 12];
//     const monthwith30Days = [4, 6, 9, 11];
//     const isLeapYear = (secondEntry) => (secondEntry % 4 === 0 && (secondEntry % 100 !== 0 || secondEntry % 400 === 0));
//     if ()
// }


// const isValidDate = (dateString) => {
//     const dateParts = filterSlash(dateString);
//     console.log(dateParts)
//     if (dateParts.length !== 3) {
//         return false
//     }
//     const day = parseInt(dateParts[0]);
//     const month = parseInt(dateParts[1]);
//     const year = parseInt(dateParts[2]);
//     console.log(day, month, year)

//     if (month < 1 || month > 12) {
//         console.log('false')
//         return false;
//     }
// }
// isValidDate('10/14/2020');


// let startDate = '999';
// const endDate = '9999';
// const leapYearVerification = (year) => {
//     if (Number.isInteger(year / 100)) {
//         if (Number.isInteger(year / 400)) {
//             result = Number.isInteger(year / 400)
//             console.log(`l'année ${year} est bisexstile`)
//             return;
//         }
//     } else if (Number.isInteger(year / 4)) {
//         console.log(`l'année ${year} est bisexstile`)
//         return;
//     }
// }
// do {
//     leapYearVerification(startDate);
//     startDate++
//     console.log(startDate)
// } while (startDate < endDate)


// let year = numbers[4] += numbers[5] += numbers[6] += numbers[7];
//     //console.log(year);
//     /*if (Number.isInteger(year / 100)) {
//         if (Number.isInteger(year / 400)) {
//             result = Number.isInteger(year / 400);
//             console.log(`l'année ${year} est bisexstile`);
//             return true;
//         } else {
//             console.log(`l'année ${year} est pas bisexstile`);
//             return false;
//         }
//     }

// let startDate = 999;
//     const endDate = 9999;
//     do {
//         leapYearVerification(startDate);
//         startDate++
//         console.log(startDate)
//     } while (startDate < endDate)
// */