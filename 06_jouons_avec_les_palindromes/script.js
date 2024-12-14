const leapYear = [

    {
        id: 1,
        name: 'janvier',
        days: 31
    },
    {
        id: 2,
        name: 'février',
        days: 29
    },
    {
        id: 3,
        name: 'mars',
        days: 31
    },
    {
        id: 4,
        name: 'avril',
        days: 30
    },
    {
        id: 5,
        name: 'mai',
        days: 31
    },
    {
        id: 6,
        name: 'juin',
        days: 30
    },
    {
        id: 7,
        name: 'juillet',
        days: 31
    },
    {
        id: 8,
        name: 'août',
        days: 31
    },
    {
        id: 9,
        name: 'septembre',
        days: 30
    },
    {
        id: 10,
        name: 'octobre',
        days: 31
    },
    {
        id: 11,
        name: 'novembre',
        days: 30
    },
    {
        id: 12,
        name: 'décembre',
        days: 31
    }

];

const nonLeapYear = [

    {
        id: 1,
        name: 'janvier',
        days: 31
    },
    {
        id: 2,
        name: 'février',
        days: 28
    },
    {
        id: 3,
        name: 'mars',
        days: 31
    },
    {
        id: 4,
        name: 'avril',
        days: 30
    },
    {
        id: 5,
        name: 'mai',
        days: 31
    },
    {
        id: 6,
        name: 'juin',
        days: 30
    },
    {
        id: 7,
        name: 'juillet',
        days: 31
    },
    {
        id: 8,
        name: 'août',
        days: 31
    },
    {
        id: 9,
        name: 'septembre',
        days: 30
    },
    {
        id: 10,
        name: 'octobre',
        days: 31
    },
    {
        id: 11,
        name: 'novembre',
        days: 30
    },
    {
        id: 12,
        name: 'décembre',
        days: 31
    }

];


const filterSlash = (date) => {
    let array = date.split('');
    for (let i of array) {
        let newArray = array.filter((arr) => arr !== '/');
        let text = newArray.join('');
        //console.log(text);
        return text;
    }
}


const isValidDate = (date) => {
    let numbers = filterSlash(date);
    let year = numbers[4] += numbers[5] += numbers[6] += numbers[7];
    console.log(year);
    if (Number.isInteger(year / 100)) {
        if (Number.isInteger(year / 400)) {
            result = Number.isInteger(year / 400);
            console.log(`l'année ${year} est bisexstile`);
            return true;
        } else {
            console.log(`l'année ${year} est pas bisexstile`);
            return false;
        }
    }
}
isValidDate('10/14/2010');


const maxDaysInMonth = (entry) => {
    let array = entry.split('');
    let test = array[2] += array[3];
    console.log(test);
    for (let i in leapYear) {
        console.log[leapYear[i]]
        // if (test === leapYear[i].id) {
        //     return true;
        // }
    }

}
maxDaysInMonth('03142001')



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


// Methode .splice aussi utile





